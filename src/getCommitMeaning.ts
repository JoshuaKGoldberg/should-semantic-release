import { CommitParser } from "conventional-commits-parser";

const alwaysMeaningfulTypes = new Set(["feat", "fix", "perf"]);

const alwaysIgnoredTypes = new Set(["docs", "refactor", "style", "test"]);

const releaseCommitTesters = [
	/^(?:chore(?:\(.*\))?:?)?\s*release\b/i,
	/^v?\d+\.\d+\.\d+?\.?/,
];

const parser = new CommitParser({
	breakingHeaderPattern: /^(\w*)(?:\((.*)\))?!: (.*)$/,
});

export function getCommitMeaning(message: string) {
	// Some types are always meaningful or ignored, regardless of potentially release-like messages
	const { header, notes, type } = parser.parse(message);
	if (
		notes.some((note) => /^BREAKING[ -]CHANGE$/.exec(note.title)) ||
		header?.match(/^BREAKING[ -]CHANGE(?: \([^)]+\))?:/)
	) {
		return "meaningful";
	}

	if (type) {
		if (alwaysMeaningfulTypes.has(type)) {
			return "meaningful";
		}

		if (alwaysIgnoredTypes.has(type)) {
			return { type };
		}
	}

	// If we've hit a release commit, we know we don't need to release
	if (releaseCommitTesters.some((regex) => regex.test(message))) {
		return "release";
	}

	return { type: type ?? undefined };
}
