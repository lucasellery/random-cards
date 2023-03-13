export function shuffleArray(arr: any[]) {
  return arr.sort(() => Math.random() - 0.5);
}

export function getRandomPoint() {
  return Math.floor(Math.random() * 10) + 1;
}
