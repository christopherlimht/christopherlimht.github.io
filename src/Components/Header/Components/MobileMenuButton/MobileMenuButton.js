import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import "./MobileMenuButton.css";
import Button from '@material-ui/core/Button';
import { Hidden } from '@material-ui/core';

export default function MobileMenuButton(props){
    return (
        <React.Fragment>
            <Hidden smUp implementation='js'>
                <div>
                <Button className='NavBarButton' variant="text" color="inherit" onClick={()=>props.handleClick(1)}>
                    <Typography variant="h6" color="inherit" noWrap>
                        Mobile
                    </Typography>
                </Button>
                </div>
            </Hidden>
        </React.Fragment>
    );
}