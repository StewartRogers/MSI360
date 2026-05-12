import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, rmSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const testDir = join(root, "tests");
const outDir = join(root, "tmp", "automated-tests");

if (!existsSync(testDir)) {
  console.error(`No test directory found at ${testDir}`);
  process.exit(1);
}

const entryPoints = collectTestFiles(testDir);

if (!entryPoints.length) {
  console.error("No automated test files found.");
  process.exit(1);
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

await build({
  entryPoints,
  bundle: true,
  platform: "node",
  target: "node20",
  format: "esm",
  outdir: outDir,
  sourcemap: "inline",
  define: {
    "import.meta.env.VITE_GEMINI_API_KEY": "undefined",
    "import.meta.env.VITE_GEMINI_MODEL": "undefined",
    "__MSI360_TEST_GEMINI_TIMEOUT_MS__": "8000"
  },
  logLevel: "silent"
});

const builtFiles = collectBuiltFiles(outDir);
const result = spawnSync(process.execPath, ["--test", ...builtFiles], {
  cwd: root,
  stdio: "inherit"
});

if (result.error) throw result.error;
process.exit(result.status ?? 1);

function collectTestFiles(dir) {
  return readdirSync(dir).flatMap((item) => {
    const fullPath = join(dir, item);
    if (statSync(fullPath).isDirectory()) return collectTestFiles(fullPath);
    return item.endsWith(".test.ts") ? [fullPath] : [];
  });
}

function collectBuiltFiles(dir) {
  return readdirSync(dir).flatMap((item) => {
    const fullPath = join(dir, item);
    if (statSync(fullPath).isDirectory()) return collectBuiltFiles(fullPath);
    return item.endsWith(".js") ? [fullPath] : [];
  });
}
