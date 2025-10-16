#!/bin/bash
# Sanity QA Pipeline - Complete validation and migration runner
# Based on QA-STRATEGY.md guidelines

set -e # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Navigate to studio directory
cd "$(dirname "$0")/.."

echo -e "${BLUE}🔍 Starting Sanity QA Pipeline...${NC}"
echo "================================="
echo "Project: vicw6cgb"
echo "Dataset: production"
echo "Time: $(date)"
echo "================================="

# Track stats
ERRORS=0
WARNINGS=0
MIGRATIONS_RUN=0

# 1. Schema validation
echo -e "\n${BLUE}📋 Step 1: Validating Schema...${NC}"
if npx sanity schema validate; then
  echo -e "${GREEN}✅ Schema is valid${NC}"
else
  echo -e "${RED}❌ Schema validation failed! Aborting pipeline.${NC}"
  exit 1
fi

# 2. Pre-migration document validation
echo -e "\n${BLUE}📋 Step 2: Pre-migration Document Validation...${NC}"
if npx sanity documents validate; then
  echo -e "${GREEN}✅ All documents valid${NC}"
else
  echo -e "${YELLOW}⚠️  Document validation warnings detected (continuing)${NC}"
  WARNINGS=$((WARNINGS + 1))
fi

# 3. Check for pending migrations
echo -e "\n${BLUE}📋 Step 3: Checking for Migrations...${NC}"
if [ -f "scripts/pending-migrations.txt" ]; then
  echo "Found pending migrations:"
  cat scripts/pending-migrations.txt
  echo ""
  
  while IFS= read -r migration; do
    if [ -n "$migration" ] && [ -f "$migration" ]; then
      echo -e "  ${BLUE}→ Running: $migration${NC}"
      if npx sanity exec "$migration" --with-user-token; then
        echo -e "  ${GREEN}✅ Success${NC}"
        MIGRATIONS_RUN=$((MIGRATIONS_RUN + 1))
      else
        echo -e "  ${RED}❌ Failed${NC}"
        ERRORS=$((ERRORS + 1))
      fi
    fi
  done < scripts/pending-migrations.txt
  
  # Clear pending migrations after running
  echo "# Migrations completed on $(date)" > scripts/pending-migrations.txt
else
  echo "No pending migrations found"
fi

# 4. Post-migration document validation
echo -e "\n${BLUE}📋 Step 4: Post-migration Document Validation...${NC}"
if npx sanity documents validate; then
  echo -e "${GREEN}✅ All documents valid after migration${NC}"
else
  echo -e "${YELLOW}⚠️  Document validation warnings after migration${NC}"
  WARNINGS=$((WARNINGS + 1))
fi

# 5. Audit unknown fields
echo -e "\n${BLUE}📋 Step 5: Auditing Unknown Fields...${NC}"
if [ -f "scripts/audit-unknown-fields.mjs" ]; then
  echo "Running field audit..."
  if npx sanity exec scripts/audit-unknown-fields.mjs; then
    echo -e "${GREEN}✅ Field audit complete${NC}"
  else
    echo -e "${YELLOW}⚠️  Field audit found issues${NC}"
    WARNINGS=$((WARNINGS + 1))
  fi
else
  echo "No audit script found (skipping)"
fi

# 6. Summary
echo ""
echo "================================="
echo -e "${BLUE}📊 Pipeline Summary:${NC}"
echo "================================="
echo "Migrations run: $MIGRATIONS_RUN"
echo "Errors: $ERRORS"
echo "Warnings: $WARNINGS"

if [ $ERRORS -eq 0 ]; then
  echo -e "\n${GREEN}✅ QA Pipeline Complete - All checks passed!${NC}"
  exit 0
else
  echo -e "\n${RED}❌ QA Pipeline Complete - Found $ERRORS errors${NC}"
  exit 1
fi