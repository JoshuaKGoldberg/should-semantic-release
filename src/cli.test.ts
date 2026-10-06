import { afterEach, describe, expect, it, vi } from "vitest";

import { shouldSemanticReleaseCLI } from "./cli.js";
import { shouldSemanticRelease } from "./shouldSemanticRelease.js";

vi.mock("./shouldSemanticRelease");

describe("cli", () => {
	afterEach(() => {
		process.exitCode = undefined;
		vi.unstubAllGlobals();
	});

	it("calls shouldSemanticRelease without verbose when --verbose is not provided", async () => {
		await shouldSemanticReleaseCLI([]);

		expect(shouldSemanticRelease).toHaveBeenCalledWith({ verbose: false });
	});

	it.each([["--verbose"], ["-v"], ["--verbose=true"]])(
		"calls shouldSemanticRelease with verbose when %s is provided",
		async (arg) => {
			await shouldSemanticReleaseCLI([arg]);

			expect(shouldSemanticRelease).toHaveBeenCalledWith({ verbose: true });
		},
	);

	it.each([["--no-verbose"], ["--verbose=false"]])(
		"calls shouldSemanticRelease without verbose when %s is provided",
		async (arg) => {
			await shouldSemanticReleaseCLI([arg]);

			expect(shouldSemanticRelease).toHaveBeenCalledWith({ verbose: false });
		},
	);

	it.each([true, false])(
		"returns %s when shouldSemanticRelease returns it",
		async (expected) => {
			vi.mocked(shouldSemanticRelease).mockResolvedValueOnce(expected);

			const actual = await shouldSemanticReleaseCLI([]);

			expect(actual).toBe(expected);
		},
	);

	it("ignores unknown flags and positionals", async () => {
		await shouldSemanticReleaseCLI(["--unknown", "value", "positional", "-v"]);

		expect(shouldSemanticRelease).toHaveBeenCalledWith({ verbose: true });
		expect(process.exitCode).toBeUndefined();
	});

	it.each([["--help"], ["-h"]])(
		"prints help without running when %s is provided",
		async (arg) => {
			const log = stubConsole("log");

			const actual = await shouldSemanticReleaseCLI([arg]);

			expect(actual).toBeUndefined();
			expect(shouldSemanticRelease).not.toHaveBeenCalled();
			expect(process.exitCode).toBeUndefined();
			expect(log.mock.calls).toMatchInlineSnapshot(`
				[
				  [
				    "Usage: should-semantic-release [options]

				Checks whether a semantic release should be run for a repository.

				Options:
				  -v, --verbose  Whether to log debug information to the console
				  -h, --help     Show this help message

				Exits with code 1 if a release should not be run.",
				  ],
				]
			`);
		},
	);

	it("prints an error without running when --verbose is given an invalid value", async () => {
		const error = stubConsole("error");

		const actual = await shouldSemanticReleaseCLI(["--verbose=yes"]);

		expect(actual).toBeUndefined();
		expect(shouldSemanticRelease).not.toHaveBeenCalled();
		expect(process.exitCode).toBe(1);
		expect(error.mock.calls).toMatchInlineSnapshot(`
			[
			  [
			    "--verbose does not take a value.
			Run 'should-semantic-release --help' for usage.",
			  ],
			]
		`);
	});
});

// console-fail-test fails tests that call console methods, so they're replaced.
function stubConsole(method: "error" | "log") {
	const mock = vi.fn();

	vi.stubGlobal("console", { ...console, [method]: mock });

	return mock;
}
