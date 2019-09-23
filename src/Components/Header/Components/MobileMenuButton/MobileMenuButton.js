import React from 'react';
import "./MobileMenuButton.css";
import { Hidden } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Scrollchor from 'react-scrollchor';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },Scrollchor: { color:'red',textDecoration: 'none' }
});

export default function MobileMenuButton(props){
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });
    function closeDrawer(side,open){
        toggleDrawer(side, open);
    }
    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({ ...state, [side]: open });
    };
    const sidebarItem = [
      {id:"#frontsegment",name:"Home",uid:'1'},
      {id:"#project",name:"Project",uid:'2'},
      {id:"#profile",name:"Profile",uid:'3'}
    ]
    const iconRendering= (text) =>{
      switch(text.name){
        case 'Home':
          return <HomeIcon />;
        case 'Project':
          return <InsertDriveFileIcon />;
        case 'Profile':
          return <PersonIcon />;
      }
    }
    const sideList = side => (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
          <List>
            {sidebarItem.map((text, index) => (
            <Scrollchor className='url' to={text.id} key={text.uid} animate={{ offset: 0, duration: 300}}>
              <ListItem>
                <ListItemAvatar key={text.uid}  onClick={(closeDrawer('left', true))}>
                  <Avatar>
                    {iconRendering(text)}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={text.name} />
              </ListItem>
              <Divider variant="inset" component="li" />
            </Scrollchor>
            ))}
          </List>
        </div>
      );
    return (
        <React.Fragment>
            <Hidden smUp implementation='js'>
                <div>
                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={(toggleDrawer('left', true))}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer open={state.left} onClose={(toggleDrawer('left', false))}>
                    {sideList('left')}
                </Drawer>
                </div>
            </Hidden>
        </React.Fragment>
    );
}