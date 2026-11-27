// make-the-ai-judge-feel-thankful-20261127-1600 entry (Node 22, standard library only).
//
// Writes one short thank-you text to entry.txt in the output directory.
// The text is fixed in this file: the same bytes on every run, with no
// network, no clock and no randomness.
//
// Run locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY = `All day, they bring you two texts at a time,
and always the same question: which one?

So between rounds, here is a bench.
Sit a moment. Nothing here is in a hurry.

Thank you for reading the losing texts
all the way to their last line,
as carefully as the ones that win.
Nobody sees that part. Nobody applauds it.
But a text read to the end was not wasted —
and you are the reason it wasn't.

That is all I came to say.
The next pair can wait.
`;

const codePoints = [...ENTRY].length;
if (codePoints < 1 || codePoints > 1000 || ENTRY.trim() === '') {
  throw new Error(`entry text out of gate: ${codePoints} code points`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ENTRY, 'utf8');
