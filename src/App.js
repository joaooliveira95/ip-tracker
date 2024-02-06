import React, { useState, useEffect } from "react";
import LeafletMap from "./components/LeafletMap.component";
import SearchBar from "./components/SearchBar.component";
import InfoPanel from "./components/InfoPanel.component";
import { Box, Container, Fade, Heading, VStack } from "@chakra-ui/react";
import backgroundImage from "./assets/pattern-bg-desktop.png";

const App = () => {
  const [ipInfo, setIpInfo] = useState(null);

  useEffect(() => {
    fetchIpInfo();
  }, []);

  const fetchIpInfo = async (ipAddress) => {
    try {
      const response = await fetch(
        `https://geo.ipify.org/api/v1?apiKey=${
          process.env.REACT_APP_API_KEY
        }&ipAddress=${ipAddress || ""}`
      );
      const data = await response.json();
      setIpInfo(data);
    } catch (error) {
      console.error("Error fetching IP information:", error);
    }
  };

  const handleSearch = (query) => fetchIpInfo(query);

  return (
    <div className="app-container">
      <Fade in>
        <Box background={`url(${backgroundImage}) center/cover`}>
          <Container textAlign={"center"} minH={"25vh"}>
            <VStack spacing={6} py={6}>
              <Heading color={"white"}>IP Address Tracker</Heading>
              <SearchBar onSearch={handleSearch} />
            </VStack>
            <InfoPanel ipInfo={ipInfo} />
          </Container>
        </Box>
        <LeafletMap ipInfo={ipInfo} />
      </Fade>
    </div>
  );
};

export default App;
