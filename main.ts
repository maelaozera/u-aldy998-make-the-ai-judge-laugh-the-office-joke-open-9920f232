// Writes one office joke to /output/entry.txt.
// Deterministic: the same single line on every run.
// Node 22, standard library only, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Our Monday meeting could have been an email, so I emailed a summary — and now we need a meeting to discuss the email.";

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE, "utf8");
