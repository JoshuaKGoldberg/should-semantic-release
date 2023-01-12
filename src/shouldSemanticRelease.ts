import conventionalCommitsParser from "conventional-commits-parser";

import { isReleaseCommit } from "./isReleaseCommit.js";
import { execOrThrow } from "./utils.js";

const ignoredTypes = new Set(["chore", "docs"]);

export async function shouldSemanticRelease() {
	const rawHistory = await execOrThrow(`git log --pretty=format:"%s"`);
	const history = rawHistory.split("\n");

	for (let i = 0; i < history.length; i += 1) {
		const message = history[i];
		// If the commit is a release, we should only release if other commits have been found
		if (isReleaseCommit(message)) {
			return !!i;
		}

		// Otherwise, we should release if a non-ignored commit type is found
		const { type } = conventionalCommitsParser.sync(message);
		if (type && !ignoredTypes.has(type)) {
			return true;
		}
	}

	// If we've seen every commit in the history and none match, don't release
	return false;
}
