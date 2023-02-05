#!/usr/bin/env node

import { shouldSemanticReleaseCLI } from "../lib/cli.js";

try {
	if (!(await shouldSemanticReleaseCLI(process.argv.slice(2)))) {
		process.exitCode = 1;
	}
} catch (error) {
	console.error("Failed to run should-semantic-release:", error);
	process.exitCode = -1;
}
