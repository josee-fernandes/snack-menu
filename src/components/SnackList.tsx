import { FC } from "react";

import SnackCard from "./SnackCard";

const SnackList: FC<ISnackListProps> = ({ snacks, type }) => {
  return (
    <div className="flex flex-col md:flex-row gap-3 flex-wrap justify-center">
      {snacks?.map((snack) => (
        <SnackCard key={snack?.id} snack={snack} />
      ))}
    </div>
  );
};

export default SnackList;
