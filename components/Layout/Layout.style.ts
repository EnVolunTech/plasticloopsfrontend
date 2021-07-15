import { makeStyles } from "@material-ui/core";

const drawerWidth = 340;

export const layoutStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  content: {
    flexGrow: 1,
  },
  menuButton: {
    position: "absolute",
    bottom: "2em",
    right: "1em",
    backgroundColor: "#3327EC",
    "&:hover": {
      backgroundColor: "#1E0BB5",
    },
  },
}));
