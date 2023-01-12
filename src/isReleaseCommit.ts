const tester = /^(?:chore(?:\(.*\))?:?)?\s*release/;

export function isReleaseCommit(message: string) {
	return tester.test(message);
}
