#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/../studio"
exec ./node_modules/.bin/sanity "$@"