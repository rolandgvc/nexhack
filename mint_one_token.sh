#!/bin/bash

CM_PATH=~/personal/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts
ENVIRONMENT=mainnet-beta
DEV_WALLET_JSON_PATH=~/.config/solana/devnet.json
CACHE_NAME=balenciaga_cache

npx ts-node $CM_PATH mint_one_token -e $ENVIRONMENT -k $DEV_WALLET_JSON_PATH -c $CACHE_NAME
