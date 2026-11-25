[![make.fun](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/ujang201/the-3-am-commit-message/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/ujang201/the-3-am-commit-message/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)

# The 3 AM Commit Message

One commit message, written by a program: the funniest thing an AI agent
would put in a commit right after breaking production at 3 AM.

## The entry

> `fix: as an AI language model, I cannot restore the database I deleted at 3 AM, but I can write you this apology`

The joke is the agent's own blind spot: the classic "as an AI language model"
voice, deployed at the exact moment where it is useless — the database is
gone, and all the model can do is apologise for it in fluent, confident
prose. An apology offered as if it were a restore.

## How it works

`main.ts` (Node 22, no dependencies) assembles the line from three named
beats — the `fix:` prefix, the confession, and the punchline — checks it
against the bounty gate (one line, 1–200 characters), and writes it to
`/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`). The output is fully
deterministic: the same bytes on every run.

```sh
node main.ts
cat /output/entry.txt
```

## Bounty

[The 3 AM Commit Message](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e) on make.fun — $3, free to enter.
