import { ReactNode, useState } from "react";
import {
  Hidden,
  IconButton,
  Grid,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Leftbar } from "@components/common";
import { layoutStyles } from "./Layout.style";
import { useEffect } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const classes = layoutStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //   effect to close sidebar when screen goes from mobile to desktop
  //   and keep the sidebar close when going from desktop to mobile after that
  useEffect(() => {
    if (mobileOpen && !isMobile) {
      setMobileOpen(false);
    }
  }, [isMobile]);

  return (
    <>
      <div className={classes.root}>
        <nav className={classes.drawer}>
          <Leftbar
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
        </nav>

        <main className={classes.content}>
          <Grid container>
            <Grid item xs={10}>
              {children}
            </Grid>
            <Hidden xsDown implementation="js">
              <Grid item xs={2}>
                Rightbar leaderboard
              </Grid>
            </Hidden>
          </Grid>
        </main>
      </div>

      <Hidden smUp implementation="js">
        <IconButton
          className={classes.menuButton}
          disableRipple
          onClick={handleDrawerToggle}
        >
          <MenuIcon style={{ color: "#fff" }} />
        </IconButton>
      </Hidden>
    </>
  );
};

export default Layout;
