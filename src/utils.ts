import cp from "node:child_process";
import { promisify } from "node:util";

const exec = promisify(cp.exec);

export async function execOrThrow(command: string) {
	const { stdout, stderr } = await exec(command);

	if (stderr) {
		throw new Error(stderr);
	}

	return stdout;
}
