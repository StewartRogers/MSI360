/**
 * Bundle smoke test for the React PDF document.
 *
 * This catches browser-bundle regressions in `@react-pdf/renderer` usage without
 * needing to visually inspect a generated PDF for every code change.
 */
import test from "node:test";
import assert from "node:assert/strict";

test("React PDF report document can be bundled for browser rendering", async () => {
  const load = new Function("specifier", "return import(specifier)") as (specifier: string) => Promise<typeof import("esbuild")>;
  const { build } = await load("esbuild");
  const result = await build({
    stdin: {
      contents: 'import { ReportDocument } from "./src/report/ReportDocument"; if (!ReportDocument) throw new Error("ReportDocument missing");',
      resolveDir: ".",
      sourcefile: "report-smoke.tsx",
      loader: "tsx"
    },
    bundle: true,
    platform: "browser",
    format: "esm",
    write: false,
    logLevel: "silent"
  });

  assert.ok(result.outputFiles?.[0]?.text.includes("MSI 360 Risk Score Report"));
});
