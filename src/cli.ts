import { parseArgs } from '@pkgjs/parseargs';

import { shouldSemanticRelease } from "./shouldSemanticRelease.js";

export async function shouldSemanticReleaseCLI(args: string[]) {
	const { values } = parseArgs({
		args,
		options: {
			verbose: { short: "v", type: "boolean" },
		},
		strict: false,
		tokens: true,
	});

	return await shouldSemanticRelease({
		verbose: !!values.verbose,
	});
}
