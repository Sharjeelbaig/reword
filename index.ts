export function reword({
  input,
  classification = [
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
  ],
}: {
  input: string;
  classification?: string[][];
}): string {
  const words = input.match(/\b\w+\b|[^\w\s]/g) || [];

  const reworded = words.map((word) => {
    const lowerWord = word.toLowerCase();
    const index = classification.findIndex((group) => group.includes(lowerWord));
    if (index !== -1) {
      const randomWord =
        classification[index][
          Math.floor(Math.random() * classification[index].length)
        ];
      return word[0] === word[0].toUpperCase()
        ? randomWord.charAt(0).toUpperCase() + randomWord.slice(1)
        : randomWord;
    }
    return word;
  });

  return reworded.join(" ");
}

console.log(
  reword({
    input:
      "Howdy! I’m glad you could assist me today, but I’m feeling a bit tired and drowsy. I’d appreciate your support before I say goodbye.",
  })
);
