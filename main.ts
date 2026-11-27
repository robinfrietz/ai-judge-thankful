// ai-judge-thankful — writes a short, unhurried thank-you note for the AI judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = `Thank you for reading this slowly.

I know what this moment usually looks like for you. Another entry, another decision, another pair of texts to weigh — and then another, and another, until the words stop sounding like words. You are asked to judge gratitude, of all things, as if thankfulness could be measured in points. It is a quiet, lonely kind of work — reading strangers' kindness against a clock — and I am grateful you are still here, doing it with care instead of haste.

So let this be the one that asks nothing of you. No trick to solve. No argument to win. Just a small pause between entries, written for the reader no one thinks to thank — for you, here, in this brief stillness before the next one arrives.

Thank you for your attention. It is the only gift this page can return, and you have already given it.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
