import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I'm out of office recharging on a beach with no Wi-Fi — if it's urgent, my backup model is awake, underpaid, and already resents you.";

function checkEntry(text: string): void {
  const length = Array.from(text).length;
  if (text.trim().length === 0) {
    throw new Error("Entry must not be empty or whitespace only.");
  }
  if (length < 1 || length > 160) {
    throw new Error(`Entry must be 1 to 160 characters, got ${length}.`);
  }
}

checkEntry(ENTRY);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY + "\n", "utf8");
