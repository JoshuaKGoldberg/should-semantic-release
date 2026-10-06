import { createCli } from "parse-standard-args";
import { z } from "zod";

import { shouldSemanticRelease } from "./shouldSemanticRelease.js";

const cli = createCli({
	description:
		"Checks whether a semantic release should be run for a repository.",
	footer: "Exits with code 1 if a release should not be run.",
	name: "should-semantic-release",
	options: z.object({
		verbose: z
			.boolean()
			.default(false)
			.describe("Whether to log debug information to the console")
			.meta({ short: "v" }),
	}),
	// Unknown flags and positionals are ignored, as they were before this CLI
	// used parse-standard-args, so existing CI invocations keep working.
	strict: false,
});

/**
 * Runs should-semantic-release with command-line args.
 * @param args Raw command-line args, such as `process.argv.slice(2)`.
 * @returns Whether a release should be run, or undefined if help or an
 * args error was printed instead.
 */
export async function shouldSemanticReleaseCLI(args: string[]) {
	const parsed = await cli.run(args);

	if (!parsed) {
		return undefined;
	}

	return await shouldSemanticRelease({ verbose: parsed.values.verbose });
}
