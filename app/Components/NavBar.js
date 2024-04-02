import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import BatteryFullIcon from "@material-ui/icons/BatteryFull";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import WifiIcon from "@material-ui/icons/Wifi";
// Add more Material UI icons as needed

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0.5,
    width: "30%",
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
  appBar: {
    backgroundColor: "#000", // Adjust the color to match the image
  },
  iconButton: {
    color: "#fff", // Adjust the color to match the image
  },
}));

const NavigationBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          {/* Add your icon here */}
          <Typography variant="h6" className={classes.title}>
            11:17
          </Typography>
          <div>
            {/* Adjust icon buttons accordingly */}
            <IconButton edge="end" className={classes.iconButton}>
              <SignalCellularAltIcon />
            </IconButton>
            <IconButton edge="end" className={classes.iconButton}>
              <WifiIcon />
            </IconButton>
            <IconButton edge="end" className={classes.iconButton}>
              <BatteryFullIcon />
            </IconButton>
            {/* Add other action icons here if necessary */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
