import { describe, expect, it } from "vitest";

import { getCommitMeaning } from "./getCommitMeaning.js";

describe("getCommitMeaning", () => {
	it.each([
		["chore", { type: undefined }],
		["chore: deps", { type: "chore" }],
		["chore(deps): bump", { type: "chore" }],
		["docs", { type: undefined }],
		["docs: bump", { type: "docs" }],
		["docs: message", { type: "docs" }],
		["feat", { type: undefined }],
		["feat: bump", "meaningful"],
		["feat: bump version to 1.2.3", "meaningful"],
		["feat: message", "meaningful"],
		["fix", { type: undefined }],
		["fix: bump", "meaningful"],
		["fix: bump version to 1.2.3", "meaningful"],
		["fix: message", "meaningful"],
		["perf", { type: undefined }],
		["perf: bump", "meaningful"],
		["perf: bump version to 1.2.3", "meaningful"],
		["perf: message", "meaningful"],
		["style", { type: undefined }],
		["style: bump", { type: "style" }],
		["style: bump version to 1.2.3", { type: "style" }],
		["style: message", { type: "style" }],
		["0.0.0", "release"],
		["v0.0.0", "release"],
		["1.2.3", "release"],
		["v1.2.3", "release"],
		["1.23.456", "release"],
		["v1.23.456", "release"],
		["12.345.6789", "release"],
		["v12.345.6789", "release"],
		["chore: release", "release"],
		["chore: release 1.2.3", "release"],
		["chore: release v1.2.3", "release"],
		["chore(deps): release", "release"],
		["chore(deps): release 1.2.3", "release"],
		["chore(deps): release v1.2.3", "release"],
	])("returns %j for %s", (input, expected) => {
		expect(getCommitMeaning(input)).toEqual(expected);
	});
});