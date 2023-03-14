export type CardType = {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

export type CardResponse = {
  data: {
    results: CardType[];
  }
}