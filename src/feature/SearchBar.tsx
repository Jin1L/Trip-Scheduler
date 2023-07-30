import React from "react";
import { createStyles, MantineProvider } from "@mantine/core";
import { BiSearchAlt2 } from "react-icons/bi";
import { Input } from "@/components/ui/input";
const useStyle = createStyles(() => ({
  searchBar: {
    display: "flex",
    boxSizing: "border-box",
    justifyContent: "center",
    marginLeft: "28.7%",
    marginTop: "2%",
    width: "31.4%",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 5px hsl(0 0% 78%)",
    borderRadius: 20,
    color: "#000",
  },
  location: {
    display: "relative",
    borderRadius: 20,
    width: "25%",
    ":hover": {
      background: "hsl(0 0% 94%)",
    },
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 0,
    marginBottom: 0,
  },
  date: {
    borderRadius: 20,
    width: "25%",
    ":hover": {
      background: "hsl(0 0% 94%)",
    },
  },
  budget: {
    borderRadius: 20,
    width: "25%",
    ":hover": {
      background: "hsl(0 0% 94%)",
    },
  },
  people: {
    display: "flex",
    borderRadius: 20,
    width: "25%",
    ":hover": {
      background: "hsl(0 0% 94%)",
    },
  },
  label: {
    position: "absolute",
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "left",
    zIndex: 5,
    marginLeft: 12.1,
    marginTop: 7,
  },
  iconBox: {
    position: "absolute",
    left: "60.6%",
    top: "25.7%",
    backgroundColor: "#30a1df80",
    borderRadius: 20,
    width: "1.5%",
    height: "3%",
    ":hover": {
      backgroundColor: "#1c94d4a8",
    },
  },
  icon: {
    marginTop: 5.5,
  },
}));

const Searchbar = () => {
  const { classes } = useStyle();
  return (
    <>
      <MantineProvider
        theme={{
          components: {
            Input: {
              styles: () => ({
                input: {
                  borderRadius: 20,
                  backgroundColor: "none",
                  ":focus-within": {
                    outline: "none",
                  },
                  border: "none",
                  ":hover": {
                    background: "hsl(0 0% 94%)",
                  },
                  "::placeholder": {
                    fontSize: "0.65rem",
                  },
                  fontSize: 11,
                  height: 44,
                  paddingTop: 12,
                },
              }),
            },
          },
        }}
      >
        <div className={classes.searchBar}>
          <div className={classes.location}>
            <p className={classes.label}>Location</p>
            <Input placeholder="Where are you going?"></Input>
          </div>
          <div className={classes.date}>
            <p className={classes.label}>Date</p>
            <Input placeholder="Starting Date"></Input>
          </div>
          <div className={classes.budget}>
            <p className={classes.label}>Budget</p>
            <Input placeholder="Ending Date"></Input>
          </div>
          <div className={classes.people}>
            <p className={classes.label}>People</p>
            <Input placeholder="How many people?"></Input>
            <span className={classes.iconBox}>
              <BiSearchAlt2 className={classes.icon} />
            </span>
          </div>
        </div>
      </MantineProvider>
    </>
  );
};

export default Searchbar;
