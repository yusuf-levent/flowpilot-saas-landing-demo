import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve("out");
const pathDir = path.join(outDir, "flowpilot");

await rm(pathDir, { recursive: true, force: true });
await mkdir(pathDir, { recursive: true });
await cp(path.join(outDir, "icon.svg"), path.join(outDir, "favicon.ico"));

for (const entry of ["_next", "404", "404.html", "icon.svg", "index.html", "index.txt"]) {
  await cp(path.join(outDir, entry), path.join(pathDir, entry), {
    recursive: true
  });
}

await cp(path.join(outDir, "icon.svg"), path.join(pathDir, "favicon.ico"));
