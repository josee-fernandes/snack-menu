interface ICard {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
  description: string;
  type: "burger" | "drink" | "side-dish";
}

interface ISnackListProps {
  snacks: ICard[];
  type: "burger" | "drink" | "side-dish";
}

interface ISnackCardProps {
  snack: ICard;
}
