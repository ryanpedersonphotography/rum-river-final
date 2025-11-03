# Sanity QA / CLI Strategy Guide

## Purpose

This document outlines a standard, repeatable QA and migration workflow using Sanity's CLI, scripts, and content validations. The goal is to:

- Ensure schema + content integrity before and after changes  
- Safely migrate content (e.g. from old "page" to new `homePage` singleton)  
- Automate checks and guardrails so human error is minimized  
- Provide a "trusted pipeline" for developers and content engineers  

---

## Principles & Constraints

1. **Run all commands from the Studio project context**  
   CLI commands like `schema validate`, `documents validate`, `exec`, etc. only work when run inside the folder containing `sanity.config.ts/js`.  

2. **Always validate schema before migrating content**  
   A broken schema leads to bad migrations.

3. **Use authenticated tokens / user context for content writes**
   - Either use `--with-user-token` (if your account has write permissions)
   - Or use a dedicated API token (Editor role) injected via env var `SANITY_AUTH_TOKEN`

4. **Idempotence where possible**  
   Migration scripts should be safe to run multiple times (e.g. `createOrReplace`, conditional patching) so mistakes are recoverable.

5. **Fail fast & summarizable reporting**  
   The QA pipeline should stop on schema errors, warn on document errors, and provide a summary of migration results.

6. **Cleanup legacy fields**  
   After migrating, run audits to remove old/unknown fields to silence "Unknown fields" warnings.

---

## CLI / Script Components

Here is a breakdown of recommended commands/scripts each with purpose and example usage:

| Component | Purpose | Example / Notes |
|---|---|---|
| `npx sanity schema validate` | Validates local schema consistency | Run at start of pipeline |
| `npx sanity documents validate` | Validate dataset against schema | Run before & after migrations |
| `npx sanity exec <script> --with-user-token` | Run arbitrary JS migration logic | Eg. migrate homepage content |
| `npx sanity documents create / patch / mutate` | One-off CLI content operations | Useful for small fixes or manual overrides |
| `npx sanity migration create` | Scaffold a migration | Use to generate a script template |
| `npx sanity migration run` | Execute a migration script | In CI / deploy step |
| `npx sanity dataset export / import` | Full data backup or offline audit | Before big migrations |

---

## Suggested QA + Migration Pipeline

Below is a logical pipeline for a change that involves both schema changes and content migration (e.g. moving existing "page" data into new page schemas).

```text
1. schema validate
   ⇨ if fails, abort

2. documents validate (pre-check)
   ⇨ log warnings (but may continue, depending on severity)

3. run migration script(s), e.g.:

   npx sanity exec scripts/migrate-home-to-singleton.mjs --with-user-token

   ⇨ check for success or errors

4. documents validate (post-check)
   ⇨ if fails, rollback or surface errors

5. (Optional) audit unknown fields
   ⇨ run an audit script to detect and remove stray keys

6. Summarize the run:
   - schema valid pre/post?
   - migration success?
   - how many docs affected?
   - any unknown field warnings left?
```

---

## Example Migration Script Template (JS)

Here's a skeleton your team can flesh out (e.g. `scripts/migrate-home-to-singleton.mjs`):

```javascript
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || process.env.SANITY_STUDIO_DATASET,
  token: process.env.SANITY_AUTH_TOKEN,
  apiVersion: '2024-07-01',
  useCdn: false
})

async function migrateHome() {
  console.log('Fetching legacy homepage...')
  const old = await client.fetch(
    `*[_type == "page" && slug.current == "home"][0]{
      ..., contentBlocks[]{..., blocks[]->{...}, features[]->{...}}
    }`
  )
  if (!old) {
    console.warn('No legacy homepage found. Skipping migration.')
    return
  }

  // Build new doc structure
  const newDoc = {
    _id: 'homePage',
    _type: 'homePage',
    seo: old.seo || {},
    hero: old.contentBlocks?.find(b => b._type === 'heroBlock') || null,
    venueDiscovery: old.contentBlocks?.find(b => b._type === 'venueDiscoveryBlock') || null,
    featureBlocks: old.contentBlocks?.find(b => b._type === 'featureBlocksBlock') || null,
    loveStories: old.contentBlocks?.find(b => b._type === 'galleryBlock') || null,
    experience: old.contentBlocks?.find(b => b._type === 'experienceBlock') || null,
    testimonials: old.contentBlocks?.find(b => b._type === 'testimonialsBlock') || null,
    form: old.contentBlocks?.find(b => b._type === 'formBlock') || null
  }

  console.log('Writing / updating homePage singleton...')
  await client.transaction()
    .createOrReplace(newDoc)
    .commit()

  console.log('Migration complete.')
}

migrateHome().catch(err => {
  console.error('Migration error:', err)
  process.exit(1)
})
```

You'll want to add logging, count of docs touched, error handling, etc.

---

## Audit / Cleanup Script Example

Detect unknown fields post-migration and optionally unset them (e.g. `scripts/audit-unknown-fields.mjs`):

```javascript
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_AUTH_TOKEN,
  apiVersion: '2024-07-01',
  useCdn: false
})

// For each document type, define allowed keys
const ALLOWED_KEYS = {
  homePage: new Set(['_id','_type','_rev','_createdAt','_updatedAt','seo','hero','venueDiscovery','featureBlocks','loveStories','experience','testimonials','form']),
  eventsPage: new Set(['_id','_type','_rev','_createdAt','_updatedAt','seo','hero','sections','form'])
  // add more types
}

async function auditType(type) {
  console.log(`Auditing documents of type: ${type}`)
  const docs = await client.fetch(`*[_type == "${type}"]{_id, ...}`)
  for (const doc of docs) {
    const keys = Object.keys(doc)
    const allowed = ALLOWED_KEYS[type] || new Set()
    const unknown = keys.filter(k => !allowed.has(k) && !k.startsWith('_'))
    if (unknown.length) {
      console.log(` • ${doc._id} has unknown fields: ${unknown.join(', ')}`)
      // Optionally unset them:
      await client.patch(doc._id).unset(unknown).commit()
      console.log(`   → unset ${unknown.join(', ')}`)
    }
  }
}

async function run() {
  for (const type of Object.keys(ALLOWED_KEYS)) {
    await auditType(type)
  }
}
run().catch(err => {
  console.error('Audit error:', err)
  process.exit(1)
})
```

---

## Integration with CI / GitHub Actions

Here's a sample GitHub Actions job you can drop into your `.github/workflows/qa-migration.yml`:

```yaml
name: Sanity QA & Migration

on:
  pull_request:
    branches: [main]
  workflow_dispatch:

jobs:
  sanity-check:
    name: Sanity Schema & Document QA
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install dependencies
        run: npm install # in project root / ensure `studio` dependencies installed
      - name: Schema validate
        run: npx sanity --project vicw6cgb --dataset production schema validate
        working-directory: ./studio
      - name: Documents validate
        run: npx sanity --project vicw6cgb --dataset production documents validate
        working-directory: ./studio

  migrate-home:
    name: Migrate homepage data (if needed)
    needs: sanity-check
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup project
        run: npm install
      - name: Run migration script
        env:
          SANITY_AUTH_TOKEN: ${{ secrets.SANITY_AUTH_TOKEN }}
          SANITY_PROJECT_ID: vicw6cgb
          SANITY_DATASET: production
        run: npx sanity exec scripts/migrate-home-to-singleton.mjs --with-user-token
        working-directory: ./studio
      - name: Post-migration validation
        run: npx sanity documents validate
        working-directory: ./studio
```

You'll want to store the write token in GitHub Secrets for `SANITY_AUTH_TOKEN`.

---

## How to Use / Iterate

1. **Commit this guide** into your repo as `QA-Strategy.md`
2. **Use it as a spec**: when you ask Claude Code to generate a migration or audit script, feed it this doc
3. **After each schema change or migration**, run `scripts/qa-and-migrate.js` (or integrate into CI)
4. **Over time you can expand it**: run audits for images, broken refs, slug uniqueness, duplicate documents, etc.

---

## Ready-to-Run Scripts

### 1. Full QA Pipeline Script
Located at: `studio/scripts/qa-pipeline.sh`

```bash
#!/bin/bash
# Run the full QA pipeline for Sanity content

cd "$(dirname "$0")/.." # Navigate to studio directory

echo "🔍 Starting Sanity QA Pipeline..."
echo "================================="

# 1. Schema validation
echo "📋 Step 1: Validating Schema..."
if ! npx sanity schema validate; then
  echo "❌ Schema validation failed! Aborting pipeline."
  exit 1
fi
echo "✅ Schema is valid"

# 2. Pre-migration document validation
echo "📋 Step 2: Pre-migration Document Validation..."
npx sanity documents validate || true # Continue even if warnings

# 3. Run migrations (if any)
if [ -f "scripts/pending-migrations.txt" ]; then
  echo "📋 Step 3: Running Migrations..."
  while IFS= read -r migration; do
    echo "  → Running: $migration"
    npx sanity exec "$migration" --with-user-token
  done < scripts/pending-migrations.txt
else
  echo "📋 Step 3: No pending migrations"
fi

# 4. Post-migration document validation
echo "📋 Step 4: Post-migration Document Validation..."
npx sanity documents validate

# 5. Audit unknown fields
echo "📋 Step 5: Auditing Unknown Fields..."
if [ -f "scripts/audit-unknown-fields.mjs" ]; then
  npx sanity exec scripts/audit-unknown-fields.mjs --with-user-token
fi

echo "================================="
echo "✅ QA Pipeline Complete!"
```

### 2. Migration Runner Script
Located at: `studio/scripts/run-migration.sh`

```bash
#!/bin/bash
# Run a specific migration with proper checks

MIGRATION=$1

if [ -z "$MIGRATION" ]; then
  echo "Usage: ./run-migration.sh <migration-script>"
  exit 1
fi

cd "$(dirname "$0")/.."

echo "🔄 Running migration: $MIGRATION"
echo "================================="

# Pre-checks
echo "📋 Pre-migration checks..."
npx sanity schema validate || exit 1
npx sanity documents validate || true

# Run migration
echo "🚀 Executing migration..."
if npx sanity exec "$MIGRATION" --with-user-token; then
  echo "✅ Migration successful"
else
  echo "❌ Migration failed"
  exit 1
fi

# Post-checks
echo "📋 Post-migration validation..."
npx sanity documents validate

echo "✅ Migration complete!"
```

---

## Claude Code Prompt Template

When asking Claude Code to generate migration scripts, use this template:

```
Please create a Sanity migration script following the QA-STRATEGY.md guidelines:

1. Follow the principles in QA-STRATEGY.md
2. Use the migration script template structure
3. Make it idempotent (safe to run multiple times)
4. Include proper error handling and logging
5. Add a count of documents affected
6. Test with schema validation before and after

The migration should: [describe what needs to be migrated]

Target schema: [describe the target schema structure]
Source data: [describe the current data structure]
```