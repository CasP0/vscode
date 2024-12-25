#!/bin/bash

# This file simply wraps the docker build command used to build the image with the
# cached result of the commands from "prepare.sh" and pushes it to the specified
# container image registry.

set -e

SCRIPT_PATH="$(cd "$(dirname $0)" && pwd)"
CONTAINER_IMAGE_REPOSITORY="$1"
BRANCH="${2:-"main"}"

if [ "${CONTAINER_IMAGE_REPOSITORY}" = "" ]; then
	echo "Container repository not specified!"
	exit 1
fi

TAG="branch-${BRANCH//\//-}"
echo "[$(date)] ${BRANCH} => ${TAG}"
cd "${SCRIPT_PATH}/../.."

echo "[$(date)] Starting image build..."
docker build -t ${CONTAINER_IMAGE_REPOSITORY}:"${TAG}" -f "${SCRIPT_PATH}/cache.Dockerfile" .
echo "[$(date)] Image build complete."

echo "[$(date)] Pushing image..."
docker push ${CONTAINER_IMAGE_REPOSITORY}:"${TAG}"
echo "[$(date)] Done!"

merge_branches_on_same_lane() {
	local branches=("$@")
	local merged_branches=()
	local branch_map=()

	for branch in "${branches[@]}"; do
		local lane="${branch%%:*}"
		if [ -z "${branch_map[$lane]}" ]; then
			branch_map[$lane]="$branch"
		else
			branch_map[$lane]="${branch_map[$lane]},$branch"
		fi
	done

	for lane in "${!branch_map[@]}"; do
		merged_branches+=("${branch_map[$lane]}")
	done

	echo "${merged_branches[@]}"
}

# Example usage
branches=("lane1:branch1" "lane1:branch2" "lane2:branch3")
merged_branches=$(merge_branches_on_same_lane "${branches[@]}")
echo "Merged branches: $merged_branches"
