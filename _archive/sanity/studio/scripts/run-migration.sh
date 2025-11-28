#!/bin/bash
# Run a specific migration with proper validation checks
# Usage: ./run-migration.sh <migration-script>

set -e # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

MIGRATION=$1

if [ -z "$MIGRATION" ]; then
  echo -e "${RED}Error: No migration script specified${NC}"
  echo "Usage: ./run-migration.sh <migration-script>"
  echo ""
  echo "Available migrations:"
  ls -1 *.mjs 2>/dev/null || echo "  No migration scripts found"
  exit 1
fi

if [ ! -f "$MIGRATION" ]; then
  echo -e "${RED}Error: Migration script not found: $MIGRATION${NC}"
  exit 1
fi

cd "$(dirname "$0")/.."

echo -e "${BLUE}🔄 Running migration: $MIGRATION${NC}"
echo "================================="
echo "Time: $(date)"
echo ""

# Pre-checks
echo -e "${BLUE}📋 Pre-migration checks...${NC}"

echo "  → Validating schema..."
if ! npx sanity schema validate; then
  echo -e "${RED}❌ Schema validation failed! Fix schema before migrating.${NC}"
  exit 1
fi
echo -e "  ${GREEN}✓ Schema valid${NC}"

echo "  → Checking current documents..."
npx sanity documents validate || true

# Backup current state (optional but recommended)
echo -e "\n${BLUE}💾 Creating backup...${NC}"
BACKUP_FILE="backups/backup-$(date +%Y%m%d-%H%M%S).ndjson"
mkdir -p backups
if npx sanity dataset export production "$BACKUP_FILE" --overwrite; then
  echo -e "${GREEN}✓ Backup saved to: $BACKUP_FILE${NC}"
else
  echo -e "${YELLOW}⚠️  Backup failed (continuing anyway)${NC}"
fi

# Run migration
echo -e "\n${BLUE}🚀 Executing migration...${NC}"
START_TIME=$(date +%s)

if npx sanity exec "$MIGRATION" --with-user-token; then
  END_TIME=$(date +%s)
  DURATION=$((END_TIME - START_TIME))
  echo -e "${GREEN}✅ Migration successful (${DURATION}s)${NC}"
else
  echo -e "${RED}❌ Migration failed${NC}"
  echo -e "${YELLOW}Restore from backup if needed: $BACKUP_FILE${NC}"
  exit 1
fi

# Post-checks
echo -e "\n${BLUE}📋 Post-migration validation...${NC}"
if npx sanity documents validate; then
  echo -e "${GREEN}✅ All documents valid${NC}"
else
  echo -e "${YELLOW}⚠️  Some validation warnings (review above)${NC}"
fi

echo ""
echo "================================="
echo -e "${GREEN}✅ Migration complete!${NC}"
echo "================================="