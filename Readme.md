# Rephrase-js

A simple library to rephrase a text.

[![npm version](https://badge.fury.io/js/rephrase-js.svg)](https://badge.fury.io/js/rephrase-js)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

<!-- downloads -->

[![npm](https://img.shields.io/npm/dt/rephrase-js)](https://www.npmjs.com/package/rephrase-js)

<!-- typescript -->

[![npm](https://img.shields.io/npm/types/rephrase-js)](https://www.npmjs.com/package/rephrase-js)

## Installation

```bash
npm install rephrase-js
```

## Usage

```js
const rephrase = require("./index.js").default;
console.log(
  rephrase({
    input:
      "Howdy! I’m glad you could assist me today, but I’m feeling a bit tired and drowsy. I’d appreciate your support before I say goodbye.",
  })
);
```

## Advanced Usage

```js
const rephrase = require("./index.js").default;
const interchangeables = [
  ["hello", "hi", "hey", "howdy", "greetings"],
  ["goodbye", "bye", "see you", "farewell", "later"],
  ["yes", "yeah", "yup", "sure", "ok", "okay"],
  ["no", "nope", "nah", "negative"],
  ["thanks", "thank you", "thx", "appreciate"],
  ["sorry", "apologies", "my bad", "excuse me"],
  ["help", "assist", "support", "guide", "aid"],
  ["love", "like", "adore", "enjoy", "appreciate"],
  ["hate", "dislike", "detest", "abhor", "despise"],
  ["happy", "joyful", "cheerful", "content", "glad"],
  ["sad", "unhappy", "sorrowful", "mournful", "gloomy"],
  ["angry", "mad", "upset", "enraged", "furious"],
  ["tired", "exhausted", "fatigued", "weary", "drained"],
  ["sleepy", "drowsy", "slumberous", "somnolent", "snoozy"],
  ["hungry", "starving", "famished", "ravenous", "peckish"],
  ["thirsty", "dehydrated", "parched", "dry", "waterless"],
  ["hot", "warm", "boiling", "scorching", "sweltering"],
  ["cold", "cool", "chilly", "freezing", "icy"],
  ["beautiful", "pretty", "lovely", "attractive", "gorgeous"],
  ["ugly", "hideous", "unattractive", "unsightly", "grotesque"],
  ["smart", "intelligent", "clever", "bright", "brilliant"],
  ["stupid", "dumb", "idiotic", "foolish", "ignorant"],
  ["rich", "wealthy", "affluent", "prosperous", "well-off"],
  ["poor", "needy", "destitute", "impoverished", "indigent"],
  ["happy", "joyful", "cheerful", "content", "glad"],
];

console.log(
  rephrase({
    input:
      "Howdy! I’m glad you could assist me today, but I’m feeling a bit tired and drowsy. I’d appreciate your support before I say goodbye.",
    interchangeables,
  })
);
```
