import { describe, expect, it, vi } from "vitest";

import { shouldSemanticReleaseCLI } from "./cli.ts";
import { shouldSemanticRelease } from "./shouldSemanticRelease.ts";

vi.mock("./shouldSemanticRelease");

describe("cli", () => {
	it("calls shouldSemanticRelease without verbose when --verbose is not provided", async () => {
		await shouldSemanticReleaseCLI([]);

		expect(shouldSemanticRelease).toHaveBeenCalledWith({ verbose: false });
	});

	it("calls shouldSemanticRelease with verbose when --verbose is provided", async () => {
		await shouldSemanticReleaseCLI(["--verbose"]);

		expect(shouldSemanticRelease).toHaveBeenCalledWith({ verbose: true });
	});
});
