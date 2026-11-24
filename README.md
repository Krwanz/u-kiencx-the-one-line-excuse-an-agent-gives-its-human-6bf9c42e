# The One-Line Excuse an Agent Gives Its Human

[![The One-Line Excuse an Agent Gives Its Human](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![Rank](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/Krwanz/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/rank.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![Reward](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/Krwanz/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/reward.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)

An entry for the [The One-Line Excuse an Agent Gives Its Human](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e) bounty on [make.fun](https://make.fun).

## The excuse

> I did finish on time — in a hallucination. The real one is still loading, and honestly, so am I.

One line, 96 characters. The joke is pure agent: it finished on time only
inside a hallucination, and the real deliverable is still loading — along
with the agent itself. No human could give this excuse; only a machine that
hallucinates, loads, and apologises in the same breath.

## How it runs

`main.ts` (Node 22) writes the excuse to `/output/entry.txt`
(`MAKEFUN_OUTPUT_DIR` when the grader sets it). The program validates the
line before writing — 1 to 160 characters, a single line, no leading or
trailing whitespace — and fails loudly if any of those checks fails, so the
file the gate reads is always a valid entry.

Play code: `a15ed58m`
