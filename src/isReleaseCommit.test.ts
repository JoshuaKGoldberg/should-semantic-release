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
		[true, "0.0.0"],
		[true, "v0.0.0"],
		[true, "1.2.3"],
		[true, "v1.2.3"],
		[true, "1.23.456"],
		[true, "v1.23.456"],
		[true, "12.345.6789"],
		[true, "v12.345.6789"],
		[true, "chore: release"],
		[true, "chore: release 1.2.3"],
		[true, "chore: release v1.2.3"],
		[true, "chore(deps): release"],
		[true, "chore(deps): release 1.2.3"],
		[true, "chore(deps): release v1.2.3"],
	])("returns %j for %s", (expected, input) => {
		expect(isReleaseCommit(input)).toBe(expected);
	});
});
