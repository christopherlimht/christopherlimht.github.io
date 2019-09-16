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
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Scrollchor from 'react-scrollchor';
const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
});

export default function MobileMenuButton(props){
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });
    function testMobileMenuButton(){
        console.log("menu button pressed");
    };
    function closeDrawer(side,open){
        toggleDrawer(side, open);
    }
    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({ ...state, [side]: open });
    };
    const sideList = side => (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <Scrollchor to="#frontsegment" className="nav-link">
              <ListItem button key={text}  onClick={(closeDrawer('left', true))}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Scrollchor>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
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