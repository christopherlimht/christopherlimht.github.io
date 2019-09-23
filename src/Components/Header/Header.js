import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import "./Header.css";
import NavbarButtonGroup from './Components/NavBarButtonGroup/NavbarButtonGroup.js'
import { makeStyles } from '@material-ui/core/styles';
import MobileMenuButton from './Components/MobileMenuButton/MobileMenuButton.js';
import HomeIcon from '@material-ui/icons/Home';
import { Hidden } from '@material-ui/core';
const useStyles = makeStyles({
    Navbar: {
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between'
    },
  });

export default function Header(props){
    const classes = useStyles();
    return (
            <AppBar className='AppBar'>
                <Toolbar className={classes.Navbar}>
                    <div className='Logo'>
                    <HomeIcon className={props.icon} />
                    <Hidden xsDown implementation='js'>
                        <Typography variant="h6" color="inherit" noWrap>
                            ChristopherLimht.github.io
                        </Typography>
                    </Hidden>
                    </div>
                    <NavbarButtonGroup handleClick={props.handleDesktopClick}/>
                    <MobileMenuButton handleClick={props.handleDesktopClick}/>
                </Toolbar>
            </AppBar>
    );
}


