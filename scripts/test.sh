#!/usr/bin/env bash

set -e # Exit on error

cd test

# Install and build the snapshot dist directory
npm install
npm run build:prod

# Format dist so it's more readable
cd ..
npm run format

# Exit with an error if there's any changes in the test/dist directory
test_err_msg="\n\nTEST ERROR: dist contains changed files that do not match the snapshot\n\n"
git add -A
git diff-index --quiet HEAD -- test/dist || (printf "$test_err_msg" && git status && exit 1);