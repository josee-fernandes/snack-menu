"use client";

import { useState, useEffect, useMemo } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

import SnackList from "~/components/SnackList";

const data: ICard[] = [
  {
    id: "0",
    thumbnail:
      "https://slapsburgers.com/wp-content/uploads/2022/12/home-hero-img.png",
    title: "Double Honey",
    price: 35,
    description:
      "Pão brioche, hambúrguer 120g, bacon, maionese especial, cebola agridoce.",
    type: "burger",
  },
  {
    id: "1",
    thumbnail:
      "https://slapsburgers.com/wp-content/uploads/2022/12/jobs-burger.png",
    title: "Double Honey",
    price: 20,
    description:
      "Pão brioche, hambúrguer 120g, bacon, maionese especial, cebola agridoce.",
    type: "burger",
  },
  {
    id: "2",
    thumbnail:
      "https://slapsburgers.com/wp-content/uploads/2022/12/slaps-triple-1.png",
    title: "Double Honey",
    price: 15,
    description:
      "Pão brioche, hambúrguer 120g, bacon, maionese especial, cebola agridoce.",
    type: "burger",
  },
  {
    id: "3",
    thumbnail:
      "https://slapsburgers.com/wp-content/uploads/2022/12/slaps-single.png",
    title: "Double Honey",
    price: 10,
    description:
      "Pão brioche, hambúrguer 120g, bacon, maionese especial, cebola agridoce.",
    type: "burger",
  },
  {
    id: "4",
    thumbnail:
      "https://cdn.dooca.store/3876/products/cabolrclx87pc1q30yrdvxsm3vdolf4ff7t3_1600x2000+fill_ffffff.png?v=1676600306",
    title: "Ice Drink Blue",
    price: 35,
    description: "Cocktail, alcoólico e gaseificado | 275ml",
    type: "drink",
  },
  {
    id: "5",
    thumbnail:
      "https://slapsburgers.com/wp-content/uploads/2022/12/slaps-regular-fries.png",
    title: "Batata regular",
    price: 4.95,
    description: "Batatinha frita 1, 2, 3",
    type: "side-dish",
  },
  {
    id: "6",
    thumbnail:
      "https://slapsburgers.com/wp-content/uploads/2022/12/slaps-cajun-fries.png",
    title: "Batata cajun",
    price: 4.95,
    description: "Batatinha frita 1, 2, 3",
    type: "side-dish",
  },
];

export default function Home() {
  const [snacks, setSnacks] = useState<ICard[]>([]);

  const burgers = useMemo(
    () => snacks.filter((snack) => snack.type === "burger"),
    [snacks]
  );
  const drinks = useMemo(
    () => snacks.filter((snack) => snack.type === "drink"),
    [snacks]
  );
  const sideDishes = useMemo(
    () => snacks.filter((snack) => snack.type === "side-dish"),
    [snacks]
  );

  useEffect(() => {
    // const response = fetch('api')
    // const data = response.json()
    const timeout = setTimeout(() => {
      setSnacks(data);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <main>
      <header>
        <Tabs defaultValue="hamburgers" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="hamburgers">Lanches</TabsTrigger>
            <TabsTrigger value="drinks">Bebidas</TabsTrigger>
            <TabsTrigger value="side-dish">Acompanhamentos</TabsTrigger>
          </TabsList>
          <TabsContent value="hamburgers">
            <SnackList snacks={burgers} type="burger" />
          </TabsContent>
          <TabsContent value="drinks">
            <SnackList snacks={drinks} type="drink" />
          </TabsContent>
          <TabsContent value="side-dish">
            <SnackList snacks={sideDishes} type="side-dish" />
          </TabsContent>
        </Tabs>
      </header>
    </main>
  );
}
