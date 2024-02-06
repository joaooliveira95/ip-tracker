import { Input, Flex, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => setQuery(event.target.value);

  const handleSearch = () => onSearch(query);

  return (
    <Flex
      alignItems="center"
      display="flex"
      maxW={{ base: "280px", md: "425px" }}
      width={"100%"}
    >
      <Input
        bg={"white"}
        borderColor={"black"}
        borderRightRadius={0}
        onChange={handleInputChange}
        placeholder="Search for any IP address or domain"
        size={"lg"}
        type="text"
        value={query}
      />
      <Button
        background="black"
        borderLeftRadius={0}
        color={"white"}
        fontSize={"1.125rem"}
        onClick={handleSearch}
        size={"lg"}
      >
        <ChevronRightIcon />
      </Button>
    </Flex>
  );
};

export default SearchBar;
