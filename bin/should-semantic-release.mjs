#!/usr/bin/env node

import { shouldSemanticReleaseCLI } from "../lib/cli.js";

try {
	// undefined means help or an args error was printed (and exitCode set).
	if ((await shouldSemanticReleaseCLI(process.argv.slice(2))) === false) {
		process.exitCode = 1;
	}
} catch (error) {
	console.error("Failed to run should-semantic-release:", error);
	process.exitCode = -1;
}
