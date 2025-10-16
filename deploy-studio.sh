#!/bin/bash
# Deploy Sanity Studio with hostname

# Using expect to handle the interactive prompt
expect -c '
spawn npx sanity deploy
expect "Studio hostname (<value>.sanity.studio):"
send "rum-river-final\r"
expect eof
'