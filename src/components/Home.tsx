import React from "react";
import Searchbar from "./searchBar";
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
    marginLeft: "6%"
  }
}));

const Home = () => {
  const { classes } = useStyle();
  return (
    <div className={classes.home}>
      <div>
        <h2 className="text-white">Make your trips come true</h2>
      </div>
      <div className={classes.searchBar}><Searchbar/></div>
    </div>
  );
};
export default Home;
