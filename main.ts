// Make the AI Judge Laugh: the Office Joke Open — entry program.
// Writes one office joke to /output/entry.txt. Deterministic: the same
// single line on every run. Node 22, standard library only, no network,
// no input files.

import { mkdirSync, writeFileSync } from "node:fs";

// The joke: a Monday meeting that could have been an email spawns an email
// summary, which spawns a meeting about the email — the loop every office
// worker recognises. One line, self-contained, no setup needed.
const JOKE =
  "Our Monday meeting could have been an email, so I emailed a summary — and now we need a meeting to discuss the email.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  // Guard the gate before writing: the entry must be 1-200 characters.
  if (JOKE.length < 1 || JOKE.length > 200) {
    throw new Error(`Entry is ${JOKE.length} characters, must be 1-200.`);
  }

  mkdirSync("/output", { recursive: true });
  // Byte-exact: the file holds exactly this line, no trailing newline.
  writeFileSync(OUTPUT_PATH, JOKE, "utf8");
}

main();
