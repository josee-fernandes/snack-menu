import { FC } from "react";

import { Skeleton } from "~/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

const LoadingCard: FC = () => {
  return (
    <Card className="w-[90%] max-w-[400px]">
      <CardHeader>
        <Skeleton className="w-[150px] h-[125px] rounded" />
        <div className="text-2xl font-semibold leading-none tracking-tight">
          <Skeleton className="w-[200px] h-[20px] rounded" />
        </div>
        <div className="text-2xl font-semibold leading-none tracking-tight">
          <Skeleton className="w-[125px] h-[20px] rounded" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">
          <Skeleton className="w-full h-[20px] rounded" />
        </div>
      </CardContent>
    </Card>
  );
};

export default LoadingCard;
