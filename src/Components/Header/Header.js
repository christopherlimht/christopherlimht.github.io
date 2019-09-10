import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import "./Header.css";

export default function Header(props){
    return (
        <AppBar className='NavBar'>
            <Toolbar>
            <CameraIcon className={props.icon} />
            <Typography variant="h6" color="inherit" noWrap>
                Album layout navbar
            </Typography>
            </Toolbar>
        </AppBar>
    );
}


