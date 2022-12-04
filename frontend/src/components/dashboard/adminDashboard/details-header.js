// import { Box, Center, HStack, Text, VStack } from "native-base";

import { Box, Stack, Typography } from "@mui/material";
import React from 'react'

export const DetailsHeader = () => {
  return (
    <Stack direction="row"  bgColor={"transperant"} spacing={28} style={{  justifyContent: "center"}}>
      <Box textAlign={"center"} width={"1/5"}>
        <Typography fontWeight={"light"} color={"white"} fontSize={"lg"}>
          Name
        </Typography>
      </Box>
      <Box textAlign={"center"} width={"1/5"}>
        <Typography fontWeight={"light"} color={"white"} fontSize={"lg"}>
          Status
        </Typography>
      </Box>
      <Box textAlign={"center"} width={"1/5"}>
        <Typography fontWeight={"light"} color={"white"} fontSize={"lg"}>
          Address
        </Typography>
      </Box>
      <Box textAlign={"center"} width={"1/5"}>
        <Typography fontWeight={"light"} color={"white"} fontSize={"lg"}>
          Toggle
        </Typography>
      </Box>

      <Typography
        textAlign={"center"}
        width={"1/5"}
        fontWeight={"light"}
        color={"white"}
        fontSize={"lg"}
      >
        Action
      </Typography>
    </Stack>
  );
};
