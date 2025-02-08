#!/bin/bash

set -e

# store current file ownership
ORIGINAL_USER_ID=$(stat -c '%u' /external)
ORIGINAL_GROUP_ID=$(stat -c '%g' /external)

# set ownership to root to fix cargo/rust build (when run as github action)
if [ "${GITHUB_ACTIONS}" == "true" ]; then
  chown -R root:root /external
fi

# Loop through the arguments
args=()
for arg in "$@"; do
  # If the argument is "-clean", perform some action
  if [ "$arg" = "-clean" ]; then
    echo "Removing out directories..."
    rm -rf /external/hues-a339x-dal/out
  elif [ "$arg" = "-4k" ]; then
    USE_4K_TEXTURES="true"
  else
    # Otherwise, add the arg it to the new array
    args+=("$arg")
  fi
done

# select build tasks for assigned texture resolution
if [ "${USE_4K_TEXTURES}" == "true" ]; then
  time npx igniter -r "^(?!.*8K).*hues-a339x-dal.*" "${args[@]}"
else
  time npx igniter -r "^(?!.*4K).*hues-a339x-dal.*" "${args[@]}"
fi

# restore ownership (when run as github action)
if [ "${GITHUB_ACTIONS}" == "true" ]; then
  chown -R ${ORIGINAL_USER_ID}:${ORIGINAL_GROUP_ID} /external
fi
