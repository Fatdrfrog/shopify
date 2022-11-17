import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";

export const CartSkeleton = () => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />

      <CardContent>
        <React.Fragment>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </React.Fragment>
      </CardContent>
    </Card>
  );
};
