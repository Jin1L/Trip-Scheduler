import React from "react";
import { createStyles } from "@mantine/core";

const useStyle = createStyles(() => ({
  navbar: {
    display: "flex",
    color: "#fff",
    paddingTop: "2.6vh",
    marginLeft: "40.5vh",
  },
  links: {
    display: "flex",
    right: 10,
    marginLeft: "50vh"
  },
  tabs: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textDecoration: "none",
    marginTop: "4%",
    marginRight: 12,
  },
}));

const Navbar = () => {
  const { classes } = useStyle();

  return (
    <div className={classes.navbar}>
      <div>
        <h1>Vacation Scheduler</h1>
      </div>
      <div className={classes.links}>
        <a href="/" className={classes.tabs}>Home</a>
        <a href="/mytrips" className={classes.tabs}>My Trip</a>
        <a href="/about" className={classes.tabs}>About</a>
      </div>
    </div>
  );
};

export default Navbar;
