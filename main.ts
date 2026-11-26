import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Roast the Smart Fridge: one line, 146 characters, plain ASCII.
// The fridge judges midnight snacks and emails a health report —
// a real smart-fridge behaviour — then the sting: the "smart" box
// cannot tell the kale from the science experiment beside it.
// No stock milk-reorder gag; one sentence, one line, no padding.
const ENTRY_HEAD =
  "My smart fridge judges my midnight snacks, emails me a health report, and still ";
const ENTRY_TAIL =
  "can't tell the kale from the science experiment growing beside it.";
const ENTRY = ENTRY_HEAD + ENTRY_TAIL;

// The grader mounts the output dir at /output and names it in
// MAKEFUN_OUTPUT_DIR; outside the grader the env var stands in for it.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Deterministic, no network, no clock, no randomness: the same bytes out on
// every run. The gate counts characters, so the file holds exactly the entry
// — no trailing newline, no extra whitespace.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY);
