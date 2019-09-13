import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import "./Header.css";
import NavbarButtonGroup from './Components/NavBarButtonGroup/NavbarButtonGroup.js'
import { makeStyles } from '@material-ui/core/styles';

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
            <AppBar>
                <Toolbar className={classes.Navbar}>
                    <div className='Logo'>
                    <LocationOnIcon className={props.icon} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Name
                    </Typography>
                    </div>
                    <NavbarButtonGroup handleClick={props.handleClick}/>    
                </Toolbar>
            </AppBar>
    );
}


