import { describe, expect, it } from "vitest";

import { isReleaseCommit } from "./isReleaseCommit.js";

describe("isReleaseCommit", () => {
	it.each([
		[false, ""],
		[false, "chore"],
		[false, "chore: deps"],
		[false, "chore(deps): bump"],
		[false, "docs"],
		[false, "docs: bump"],
		[false, "feat"],
		[false, "feat: bump"],
		[true, "chore: release"],
		[true, "chore: release 1.2.3"],
		[true, "chore: release v1.2.3"],
		[true, "chore(deps): release"],
		[true, "chore(deps): release 1.2.3"],
		[true, "chore(deps): release v1.2.3"],
	])("returns %b for %s", (expected, input) => {
		expect(isReleaseCommit(input)).toBe(expected);
	});
});
