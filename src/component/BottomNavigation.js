import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import TvRoundedIcon from '@mui/icons-material/TvRounded';
import WhatshotRoundedIcon from '@mui/icons-material/WhatshotRounded';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
const useStyles = makeStyles({
    root:{
        width:'100vw',
        background: "#fd1863 !important",
        position:'fixed',
        bottom:0,
        color:"#fff",
        zIndex:100,
    },
    Bcolor:{
        color:"#fff !important"
    }
})
export default function BottomNavbar() {
  const [value, setValue] = React.useState(0);
const classes = useStyles()
  return (
    <Box  >
      <BottomNavigation className={classes.root}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Trending" className={classes.Bcolor} icon={<WhatshotRoundedIcon />} />
        <BottomNavigationAction label="Movie" className={classes.Bcolor} icon={<LiveTvRoundedIcon />} />
        <BottomNavigationAction label="Tv Series"  className={classes.Bcolor} icon={<TvRoundedIcon />} />
        <BottomNavigationAction label="Search"  className={classes.Bcolor} icon={<SearchRoundedIcon />} />
      </BottomNavigation>
    </Box>
  );
}