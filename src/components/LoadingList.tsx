"use client";
import { FC } from "react";

import LoadingCard from "./LoadingCard";

const LoadingList: FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 flex-wrap justify-center">
      {[0, 1, 2, 3].map((item) => (
        <LoadingCard key={`card-${item}`} />
      ))}
    </div>
  );
};

export default LoadingList;
