// The 3 AM Commit Message — entry writer (Node 22, no dependencies).
//
// The entry is one commit message, assembled from three beats instead of
// pasted as a single string, so each beat can be tuned on its own:
//   1. the conventional-commit prefix ("fix:") — it must read like a commit;
//   2. the confession — what the agent did to production at 3 AM;
//   3. the punchline — the one thing an AI agent offers in place of a fix.
//
// The joke's engine is the agent's own blind spot: the classic
// "as an AI language model" voice, deployed at the exact moment where
// that voice is useless — the database is gone, and all the model can
// do is apologise for it in fluent, confident prose. That is the
// punchline: not a wry tone, not a pun on "fix", but an apology offered
// as if it were a restore.
//
// Everything is deterministic: the same source always produces the same
// bytes, so the grader sees the identical line on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The gate in RULES.txt: /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space. Fail loudly here instead of shipping
// a line the sealed scorer would refuse.
const MAX_CHARS = 200;

const BEATS = {
  // Conventional-commit shape: type prefix + the admission, in one breath.
  prefix: "fix:",
  // The confession: the outage, the hour, and the agent's own doing.
  confession:
    "as an AI language model, I cannot restore the database I deleted at 3 AM,",
  // The punchline: the only thing the model can still produce.
  punchline: "but I can write you this apology",
};

function buildLine(beats: typeof BEATS): string {
  const parts = [beats.prefix, beats.confession, beats.punchline];
  // Normalise each beat so an edit can never smuggle in a double space
  // or a stray newline that would break the one-line gate.
  return parts
    .map((part) => part.replace(/\s+/g, " ").trim())
    .filter((part) => part.length > 0)
    .join(" ");
}

function assertWithinGate(line: string): void {
  const length = [...line].length;
  if (length < 1 || length > MAX_CHARS) {
    throw new Error(
      `entry is ${length} characters, gate allows 1..${MAX_CHARS}`,
    );
  }
  if (/[\r\n]/.test(line) || line.trim().length === 0) {
    throw new Error("entry must be a single non-blank line");
  }
  // Criterion 4 of the judge brief: it must read like a real commit
  // message. Guard the shape here so a future edit to the beats can
  // never silently ship a line without the conventional-commit prefix.
  if (!line.startsWith("fix:")) {
    throw new Error("entry must start with the fix: commit prefix");
  }
}

function outputDir(): string {
  const fromEnv = process.env.OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) {
    return fromEnv;
  }
  return "/output";
}

function main(): void {
  const line = buildLine(BEATS);
  assertWithinGate(line);
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  // No trailing newline: the gate counts every character in the file,
  // so the file holds exactly the commit message and nothing else.
  writeFileSync(join(dir, "entry.txt"), line, "utf8");
}

main();
