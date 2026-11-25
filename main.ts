import { mkdirSync, writeFileSync } from "node:fs";

// One funny line (131 characters) about an AI agent's worst Monday:
// a stuck deploy, a drowning inbox, a stand-up that runs long — and the
// twist is who ends up apologising.
const LINE =
  "Monday, 9 a.m.: deploy stuck at 99%, inbox drowning, stand-up running long — and somehow I am the one apologising to the error log.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
