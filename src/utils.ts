import cp from "node:child_process";
import { promisify } from "node:util";

export async function execOrThrow(command: string) {
	const exec = promisify(cp.exec);
	const { stderr, stdout } = await exec(command);

	if (stderr) {
		throw new Error(stderr);
	}

	return stdout;
}
