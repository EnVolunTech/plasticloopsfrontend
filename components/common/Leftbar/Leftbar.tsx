import {
  Drawer,
  Hidden,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  useTheme,
} from "@material-ui/core";
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import SearchIcon from "@material-ui/icons/Search";
import EventIcon from "@material-ui/icons/Event";
import SchoolIcon from "@material-ui/icons/School";
import { leftbarStyles } from "./Leftbar.style";

interface LeftbarProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const Leftbar = ({ mobileOpen, handleDrawerToggle }: LeftbarProps) => {
  const classes = leftbarStyles();
  const theme = useTheme();

  const drawer = (
    <div>
      <Typography className={classes.brand} variant="h6" noWrap>
        PlasticLoops
      </Typography>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon className={classes.listItemIcon}>
            <SwapHorizontalCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Barter" />
        </ListItem>
        <ListItem button>
          <ListItemIcon className={classes.listItemIcon}>
            <MonetizationOnIcon />
          </ListItemIcon>
          <ListItemText primary="Sell" />
        </ListItem>
        <ListItem button>
          <ListItemIcon className={classes.listItemIcon}>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem button>
          <ListItemIcon className={classes.listItemIcon}>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="Events" />
        </ListItem>
        <ListItem button>
          <ListItemIcon className={classes.listItemIcon}>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Learn" />
        </ListItem>

        <Hidden smUp implementation="js">
          <ListItem button>
            <ListItemIcon className={classes.listItemIcon}>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Leaderboard" />
          </ListItem>
        </Hidden>
      </List>
    </div>
  );
  return (
    <>
      <Hidden smUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>

      <Hidden xsDown implementation="js">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </>
  );
};

export default Leftbar;
