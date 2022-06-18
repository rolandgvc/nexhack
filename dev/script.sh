#!/bin/bash

CM_PATH=~/personal/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts
ENVIRONMENT=devnet
DEV_WALLET_JSON_PATH=~/personal/devnet.json
CACHE_NAME=balenciaga_cache
ASSETS=~/personal/dev/assets2
CONFIG=config.json
NUMBER=7

rm -rf .cache

npx ts-node ~/personal/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts upload -e $ENVIRONMENT -k $DEV_WALLET_JSON_PATH -c $CACHE_NAME -cp config.json $ASSETS 

npx ts-node ~/personal/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts verify_upload -e $ENVIRONMENT -k $DEV_WALLET_JSON_PATH -c $CACHE_NAME 

npx ts-node $CM_PATH mint_multiple_tokens -n $NUMBER -e $ENVIRONMENT -k $DEV_WALLET_JSON_PATH -c $CACHE_NAME
