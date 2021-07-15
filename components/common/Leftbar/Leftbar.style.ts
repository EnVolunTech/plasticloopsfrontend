import { makeStyles } from "@material-ui/core";

const drawerWidth = 340;

export const leftbarStyles = makeStyles(() => ({
  drawerPaper: {
    width: drawerWidth,
  },

  brand: {
    margin: "10px",
    textAlign: "center",
    fontWeight: 700,
  },
  listItemIcon: {
    minWidth: "30px",
    margin: "0 10px",
  },
}));
