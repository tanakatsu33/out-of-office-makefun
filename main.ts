import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry is a single out-of-office line of at most 160 characters.
const SETUP = "I'm out of office recharging on a beach with no Wi-Fi — ";
const PUNCHLINE =
  "if it's urgent, my backup model is awake, underpaid, and already resents you.";
const ENTRY = SETUP + PUNCHLINE;

function checkEntry(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("Entry must not be empty or whitespace only.");
  }
  const length = Array.from(text).length;
  if (length < 1 || length > 160) {
    throw new Error(`Entry must be 1 to 160 characters, got ${length}.`);
  }
}

checkEntry(ENTRY);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY + "\n", "utf8");
