#!/usr/bin/env node

import { shouldSemanticRelease } from "../lib/index.js";

try {
	if (!(await shouldSemanticRelease())) {
		process.exitCode = 1;
	}
} catch (error) {
	console.error("Failed to run should-semantic-release:", error);
	process.exitCode = -1;
}
