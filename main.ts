// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry itself is the X post: a GTA 6 meme, posted from a public
// account, whose address lives in POST.json at this repository's root.
// All this program does is hand that file to the grader, by copying
// POST.json into the output directory. It reads nothing else, reaches
// no network, and writes the same bytes on every run.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

try {
  const source = join(botDir, "POST.json");
  const target = join(outputDir, "POST.json");
  copyFileSync(source, target);
} catch (error) {
  console.error(`could not copy POST.json from ${botDir} to ${outputDir}: ${(error as Error).message}`);
  process.exit(1);
}
