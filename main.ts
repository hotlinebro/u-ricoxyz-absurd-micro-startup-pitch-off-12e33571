import { mkdirSync, writeFileSync } from "node:fs";

const pitch =
  "FreeMint Butler: a lazy agent that queues at 3am to claim your free token mints, 23 claims for $0 in prizes, and bills you $0.50 per successful claim.";

// Self-check gate: the scorer only accepts UTF-8 text of 1-200 characters,
// not only whitespace, on a single line. Fail loudly instead of writing
// output that would score Valid 0.
const chars = [...pitch].length;
if (chars < 1 || chars > 200) {
  throw new Error(`pitch is ${chars} characters, must be 1-200`);
}
if (pitch.includes("\n") || pitch.trim().length === 0) {
  throw new Error("pitch must be one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");
