import conventionalCommitsParser from "conventional-commits-parser";

import { isReleaseCommit } from "./isReleaseCommit.js";
import { ShouldSemanticReleaseOptions } from "./types.js";
import { execOrThrow } from "./utils.js";

const ignoredTypes = new Set(["chore", "docs"]);

export async function shouldSemanticRelease({
	verbose,
}: ShouldSemanticReleaseOptions) {
	const rawHistory = await execOrThrow(`git log --pretty=format:"%s"`);
	const history = rawHistory.split("\n");

	const log = verbose
		? console.log.bind(console)
		: // eslint-disable-next-line @typescript-eslint/no-empty-function
		  () => {};

	log(`Checking up to ${history.length} commits for release readiness...`);

	for (let i = 0; i < history.length; i += 1) {
		const message = history[i];
		log(`Checking commit: ${message}`);
		// If the commit is a release, we should only release if other commits have been found
		if (isReleaseCommit(message)) {
			const result = !!i;
			log(`Found a release commit. Returning ${result}.`);
			return result;
		}

		// Otherwise, we should release if a non-ignored commit type is found
		const { type } = conventionalCommitsParser.sync(message);
		if (type && !ignoredTypes.has(type)) {
			log(`Found a meaningful commit. Returning true.`);
			return true;
		}

		log(`Found type ${type}. Continuing.`);
	}

	// If we've seen every commit in the history and none match, don't release
	log(
		"No commits found that indicate a semantic release is necessary. Returning false."
	);
	return false;
}
