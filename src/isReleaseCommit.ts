const tester = /^(?:chore(?:\(.*\))?:?)?\s*release|v?\d+\.\d+\.\d+/;

export function isReleaseCommit(message: string) {
	return tester.test(message);
}
