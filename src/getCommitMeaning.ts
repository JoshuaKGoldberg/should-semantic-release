import conventionalCommitsParser from "conventional-commits-parser";

export type CommitMeaning = "release" | "meaningful" | "other";

const alwaysMeaningfulTypes = new Set(["feat", "fix"]);

const alwaysIgnoredTypes = new Set(["docs", "refactor", "style", "test"]);

const releaseCommitTester =
	/^(?:chore(?:\(.*\))?:?)?\s*release|v?\d+\.\d+\.\d+/;

export function getCommitMeaning(message: string) {
	// Some times are always meaningful or ignored, regardless of potentially release-like messages
	const { type } = conventionalCommitsParser.sync(message);
	if (type) {
		if (alwaysMeaningfulTypes.has(type)) {
			return "meaningful";
		}
		if (alwaysIgnoredTypes.has(type)) {
			return { type };
		}
	}

	// If we've hit a release commit, we know we don't need to release
	if (releaseCommitTester.test(message)) {
		return "release";
	}

	return { type: type ?? undefined };
}
