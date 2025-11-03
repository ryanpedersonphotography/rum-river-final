#!/bin/bash

# Deploy Studio with hostname selection
printf "rum-river-final\n" | npx sanity deploy 2>&1

echo "Deployment complete!"