import { createStyles } from "@mantine/core";
import Navbar from "../feature/Navbar";
import Home from "../feature/Home";
import Background from "./images/wallpaper.jpg";

const useStyle = createStyles(() => ({
  main: {
    height: "100vh",
    textAlign: "center",
    backgroundImage: `url(${Background})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  },

  content: {
    padding: 0,
  },
}));

function MyTrips() {
  const { classes } = useStyle();
  return (
    <div className={classes.main}>
      <Navbar />
      <div className={classes.content}>{/* <Home></Home> */}</div>
    </div>
  );
}

export default MyTrips;
