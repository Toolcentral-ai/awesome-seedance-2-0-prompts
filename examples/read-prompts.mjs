#!/usr/bin/env node
import { readFileSync } from "node:fs";

const bundle = JSON.parse(readFileSync(new URL("../data/seedance-2-0-prompts.json", import.meta.url), "utf8"));
console.log(`Loaded ${bundle.prompts.length} Seedance 2.0 video prompts`);
for (const prompt of bundle.prompts.slice(0, 5)) {
  console.log(`- [${prompt.generationMode}] ${prompt.title}: ${prompt.source.caseUrl}`);
}
