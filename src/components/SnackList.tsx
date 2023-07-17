import { FC } from "react";

import SnackCard from "./SnackCard";

const SnackList: FC<ISnackListProps> = ({ snacks, type }) => {
  return (
    <div>
      {snacks?.map((snack) => (
        <SnackCard key={snack?.id} snack={snack} />
      ))}
    </div>
  );
};

export default SnackList;
