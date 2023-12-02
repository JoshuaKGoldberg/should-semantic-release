import {
	parser,
	toConventionalChangelogFormat,
} from "@conventional-commits/parser";

const alwaysMeaningfulTypes = new Set(["feat", "fix", "perf"]);

const alwaysIgnoredTypes = new Set(["docs", "refactor", "style", "test"]);

const releaseCommitTester =
	/^(?:chore(?:\(.*\))?:?)?\s*release|v?\d+\.\d+\.\d+/;

export function getCommitMeaning(message: string) {
	let type = undefined;
	try {
		const messageAst = parser(message);
		const commit = toConventionalChangelogFormat(messageAst);
		type = commit.type;

		// Some types are always meaningful or ignored, regardless of potentially release-like messages
		if (alwaysMeaningfulTypes.has(type)) {
			return "meaningful";
		}

		if (alwaysIgnoredTypes.has(type)) {
			return { type };
		}
	} catch {
		/* empty */
	}

	// If we've hit a release commit, we know we don't need to release
	if (releaseCommitTester.test(message)) {
		return "release";
	}

	return { type };
}
