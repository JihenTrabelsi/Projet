// import { Center, HStack, Text } from "native-base";
import { Box, Stack, Typography } from '@mui/material';
import React from 'react'

export const CaseCount = ({
  count,
  heading,
  
}) => {
  const formatCount = (count) => {
    if (count < 100) {
      return `0${count}`;
    }
    return count;
  };

  return (
    <Stack bg={"white"} maxWidth={["400px", "300px"]} mb={[2, ""]}>
      <Box padding={8} style = {{padding: "6px"}}>
        <Typography fontSize={"3xl"} fontWeight="semibold" color={"yellow.400"}>
          {formatCount(count)}
        </Typography>
      </Box>
      <Box paddingRight={10}>
        <Typography
          fontSize={"lg"}
          color="coolGray.400"
          fontWeight={"semibold"}
          textTransform={"uppercase"}
          style = {{padding: "6px"}}>
          {heading.split(" ")[0]}
          <br />
          {heading.split(" ")[1]}
        </Typography>
      </Box>
    </Stack>
  );
};
