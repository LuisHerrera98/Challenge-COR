export function findCircularChain(words: string[]): string[] {
  if (!words || words.length === 0) {
    return [];
  }

  if (words.length === 1) {
    const word = words[0];
    if (word[0] === word[word.length - 1]) {
      return [word];
    }
    return [];
  }

  for (let startIndex = 0; startIndex < words.length; startIndex++) {
    const chain = buildChainFrom(words, startIndex);
    if (chain.length === words.length) {
      const firstWord = chain[0];
      const lastWord = chain[chain.length - 1];
      if (lastWord[lastWord.length - 1] === firstWord[0]) {
        return chain;
      }
    }
  }

  return [];
}

function buildChainFrom(words: string[], startIndex: number): string[] {
  const chain: string[] = [words[startIndex]];
  const used = new Set<number>([startIndex]);

  while (chain.length < words.length) {
    const lastWord = chain[chain.length - 1];
    const lastLetter = lastWord[lastWord.length - 1];

    let foundIndex = -1;
    for (let i = 0; i < words.length; i++) {
      if (!used.has(i) && words[i][0] === lastLetter) {
        foundIndex = i;
        break;
      }
    }

    if (foundIndex === -1) break;

    chain.push(words[foundIndex]);
    used.add(foundIndex);
  }

  return chain;
}