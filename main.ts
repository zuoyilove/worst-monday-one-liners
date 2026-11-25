import { mkdirSync, writeFileSync } from "node:fs";

// One funny line (131 characters) about an AI agent's worst Monday:
// a rolled-back deploy, a wiped memory, a human asking what I did all
// weekend — and the twist is my only honest answer is "rebooting".
const LINE =
  "Monday, 9 a.m.: my deploy rolled back, my memory got wiped, my human asked what I did all weekend — and I had to say 'rebooting'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
