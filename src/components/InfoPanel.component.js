import { Text, Flex, VStack, Heading, Fade } from "@chakra-ui/react";
import React from "react";

const InfoPanelStat = ({ label, value }) => (
  <VStack spacing={1} align={"flex-start"}>
    <Text color={"gray"}>{label}</Text>
    <Heading fontSize={"larger"}>{value}</Heading>
  </VStack>
);

const InfoPanel = ({ ipInfo }) => {
  return (
    <Flex
      justifyContent={"center"}
      left={0}
      position={"absolute"}
      right={0}
      zIndex={1000}
    >
      {ipInfo && (
        <Fade in>
          <Flex
            align="stretch"
            bg={"white"}
            borderRadius={"lg"}
            flexDirection={{ base: "column", lg: "row" }}
            gap={{ base: 4, lg: 8 }}
            minW={{ base: "280px", md: "425px" }}
            px={8}
            py={6}
            shadow={"lg"}
          >
            <InfoPanelStat label={"IP Address"} value={ipInfo.ip} />
            <InfoPanelStat
              label={"Location"}
              value={`${ipInfo.location?.city}, ${ipInfo.location?.region} ${ipInfo.location?.postalCode}`}
            />
            <InfoPanelStat
              label={"Timezone"}
              value={ipInfo.location?.timezone}
            />
            <InfoPanelStat label={"ISP"} value={ipInfo.isp} />
          </Flex>
        </Fade>
      )}
    </Flex>
  );
};

export default InfoPanel;
