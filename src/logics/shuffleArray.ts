export const shuffleArray = <T>(array: T[]): T[] => {
  const copiedArray = [...array];
  for (let i = copiedArray.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    [copiedArray[i], copiedArray[r]] = [copiedArray[r], copiedArray[i]];
  }
  return copiedArray;
};
