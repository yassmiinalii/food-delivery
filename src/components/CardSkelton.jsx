import React from "react";
import { Grid, Skeleton, Stack } from "@mui/material";

const CardSkelton = () => {
  return (
      <Grid item xs={12} md={4}>
        <Stack spacing={2}>
          <Skeleton variant="rounded" width={340} height={200} />
          <Skeleton variant="rounded" width={180} height={20} />
          <Skeleton variant="rounded" width={140} height={20} />
        </Stack>
      </Grid>
  );
};

export default CardSkelton;
