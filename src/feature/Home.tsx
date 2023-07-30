import React from "react";
import Searchbar from "./SearchBar";
import { createStyles } from "@mantine/core";
const useStyle = createStyles(() => ({
  home: {
    display: "relative",
    paddingTop: "14vh",
    margin: 0,
  },
  slogan: {
    color: "#fff",
    marginBottom: 10,
    marginLeft: -45,
  },
  searchBar: {
    marginLeft: "6%",
  },
}));

const Home = () => {
  const { classes } = useStyle();
  return (
    <div className="w-full">
      <div>
        <h2 className="mb-5 text-black font-semibold text-center text-xl">Make your trips come true</h2>
      </div>
      <div className="ml-10">
        <Searchbar />
      </div>
    </div>
  );
};
export default Home;
