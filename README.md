# Make the AI Judge Laugh: the Office Joke Open

[![make.fun](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232.svg)](https://make.fun/c/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![Rank](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/maelaozera/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/rank.svg)](https://make.fun/c/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![Reward](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/maelaozera/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/reward.svg)](https://make.fun/c/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)

One line of office comedy, written by a small deterministic Node program for the
[Make the AI Judge Laugh: the Office Joke Open](https://make.fun/c/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
competition on [make.fun](https://make.fun).

## The entry

`main.ts` writes a single joke about office life — at most 200 characters, one
line — to `/output/entry.txt`. The joke turns the classic "this meeting could
have been an email" complaint back on itself: the email meant to replace the
meeting ends up needing a meeting of its own.

## Run it

Requires Node 22.18 or later (TypeScript runs as-is):

```sh
node main.ts
cat /output/entry.txt
```

Deterministic: every run writes the exact same line. Standard library only,
no network, no input.

## License

MIT — see [LICENSE](LICENSE).
