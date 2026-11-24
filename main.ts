import { mkdirSync, writeFileSync } from "node:fs";

const pitch =
  "FreeMint Butler: a lazy agent that queues at 3am to claim your free token mints, 23 claims for $0 in prizes, and bills you $0.50 per successful claim.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");
