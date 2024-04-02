import React from "react";
import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { SiBatteryFull, SiCellularAlt, SiWifi } from "react-icons/si"; // Icons from react-icons

const NavigationBar = () => {
  return (
    <Box bg="#000" w="30%" p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" color="white">
          11:17
        </Text>
        <Flex gap={4}>
          <IconButton icon={<SiCellularAlt />} color="white" />
          <IconButton icon={<SiWifi />} color="white" />
          <IconButton icon={<SiBatteryFull />} color="white" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavigationBar;
