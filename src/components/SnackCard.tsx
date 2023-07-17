import Image from "next/image";
import { FC } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import burgerImg from "public/burger.png";

const SnackCard: FC<ISnackCardProps> = ({ snack }) => {
  return (
    <Card>
      <CardHeader>
        <div>
          <img
            src={snack.thumbnail}
            alt={snack.title}
            width="150"
            height="300"
          />
        </div>
        <CardTitle className="text-2xl">{snack.title}</CardTitle>
        <CardTitle>R$ {snack.price.toFixed(2)}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{snack.description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default SnackCard;
