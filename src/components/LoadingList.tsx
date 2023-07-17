"use client";
import { FC } from "react";

import LoadingCard from "./LoadingCard";

const LoadingList: FC = () => {
  return (
    <div>
      {[0, 1, 2].map((item) => (
        <LoadingCard key={`card-${item}`} />
      ))}
    </div>
  );
};

export default LoadingList;
