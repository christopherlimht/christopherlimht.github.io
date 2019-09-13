import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import "./NavbarButtonGroup.css";
import Button from '@material-ui/core/Button';

export default function NavbarButtonGroup(props){
    return (
        <React.Fragment>
            <div>
            <Button className='NavBarButton' variant="text" color="inherit" onClick={()=>props.handleClick(1)}>
                <Typography variant="h6" color="inherit" noWrap>
                    Home
                </Typography>
            </Button>
            <Button className='NavBarButton' variant="text" color="inherit" onClick={()=>props.handleClick(2)}>
                <Typography variant="h6" color="inherit" noWrap>
                    Projects
                </Typography>
            </Button>
            <Button className='NavBarButton' variant="text" color="inherit" onClick={()=>props.handleClick(3)}>
                <Typography variant="h6" color="inherit" noWrap>
                    Contact
                </Typography>
            </Button>
            </div>
        </React.Fragment>
    );
}