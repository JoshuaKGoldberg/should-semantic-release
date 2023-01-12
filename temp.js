import cp from "node:child_process";
import { promisify } from "node:util";
console.clear();

const exec = promisify(cp.exec);

async function execOrThrow(command) {
	const { stdout, stderr } = await exec(command);
	if (stderr) {
		throw new Error(stderr);
	}

	return stdout;
}

async function shouldRelease() {
	const rawHistory = await execOrThrow(`git log --pretty=format:"%s"`);
	const history = rawHistory.split("\n");
	console.log({ history });

	for (const commit of history) {
		const [subject] = commit.trim().split("-");
		if (subject === "chore") {
			return false;
		}
	}

	return true;
}

try {
	if (!shouldRelease()) {
		process.exitCode = 1;
	}
} catch (error) {
	throw new Error("Error trying to determine release eligibility...", {
		cause: error,
	});
}
