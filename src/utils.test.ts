import { describe, expect, it, vi } from "vitest";

import { execOrThrow } from "./utils.js";

const mockExec = vi.fn();

vi.mock("node:child_process", () => ({
	default: {
		get exec() {
			return mockExec;
		},
	},
}));

describe("execOrThrow", () => {
	it("throws an error when exec prints to stderr", async () => {
		mockExec.mockImplementation((command, callback) => {
			callback(null, { stderr: "Oh no!" });
		});

		await expect(
			async () => await execOrThrow("ls"),
		).rejects.toMatchInlineSnapshot(`[Error: Oh no!]`);
	});

	it("returns stdout when exec doesn't print to stderr", async () => {
		const stdout = "abc123";

		mockExec.mockImplementation((command, callback) => {
			callback(null, { stdout });
		});

		const actual = await execOrThrow("ls");

		expect(actual).toEqual(stdout);
	});
});
