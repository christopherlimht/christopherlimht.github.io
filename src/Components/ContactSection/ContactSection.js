import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid, Divider } from '@material-ui/core';
import { Element } from 'react-scroll'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import InfoIcon from '@material-ui/icons/Info';
import AssignmentIcon from '@material-ui/icons/Assignment';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
import Typography from '@material-ui/core/Typography';
import "./ContactSection.css"
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;
var scroller = Scroll.scroller;
const useStyles = makeStyles(theme => ({
    contactBackground: {
      backgroundColor:"#101010",
      color:'white',
      height:"100%",
      display:'flex',
      alignItems:'center',
      paddingTop:"20px",
      paddingBottom:'10px'
    },
    gridContainer:{
      height:"100%",
      display:'flex',
      justifyContent:'center',
    },
    icon:{
      color:"white",
      fontSize:'2em',
      display:'flex',
      justifyContent:"center"
    },
    divider:{
      border:'1px solid',
      height:"100%"
    },
    gridItem:{
      height:"100%"
    },
    Logo:{
      color:'black',
      display:"inline",
      fontFamily:'"Bebas Neue",cursive',
      fontWeight:'700',
      backgroundColor:'white',
      letterSpacing:'0.1em',
      paddingLeft:'5px',
      paddingRight:'5px',
      width:"fit-content"
    },
    Links:{
      color:'white',
      marginLeft:"25px",
    },
    Naming:{
      color:'white',
      marginLeft:"10px",
      display:'inline'
    },
  })
)

function ContactSection() {
    const classes = useStyles();
    const click = (element,offset)=>scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: offset, // Scrolls to element + 50 pixels down the page
      
    });
    const externalLink = (url) => {
      window.location.href = url
    }
    const [open, setOpen] = React.useState(false);
    const copyToClipBoard = (content) =>{
      navigator.clipboard.writeText(content);
      console.log("copyToClipBoard")
      setOpen(true);
    }
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };
    return (
      
      <Element name="myContact">
      <React.Fragment>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="My email is copied to your clipboard"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              Close
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
          <Container className={classes.contactBackground} maxWidth={false}>
            <Container width='xl'>
              <Grid container name="contactSection" className={classes.gridContainer}>
                <Grid item xs>
                  <Typography className={classes.Links} variant="h6">Quick links</Typography>
                  <List component="nav" className={classes.root}>
                    <ListItem button onClick={()=>scroll.scrollToTop()}>
                      <ListItemIcon className={classes.icon}>
                        <VerticalAlignTopIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Back to top" />
                    </ListItem>
                    <ListItem button onClick={()=>click("myAbout",-100)}>
                      <ListItemIcon className={classes.icon} >
                        <InfoIcon/>
                      </ListItemIcon>
                      <ListItemText primary="About" />
                    </ListItem>
                    <ListItem button onClick={()=>click("myProjects",-100)}>
                      <ListItemIcon className={classes.icon}>
                        <AssignmentIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Projects" />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs>
                  <Typography className={classes.Links} variant="h6">Contact me</Typography>
                  <List component="nav" className={classes.root}>
                    <ListItem button onClick={()=>externalLink('http://www.linkedin.com/in/christopher-limht')}>
                      <ListItemIcon className={classes.icon}>
                        <i className="fab fa-linkedin"></i>  
                      </ListItemIcon>
                      <ListItemText primary="LinkedIn" />
                    </ListItem>
                    <ListItem button onClick={()=>copyToClipBoard("christopherlimht@gmail.com")}>
                      <ListItemIcon className={classes.icon}>
                        <i className="fas fa-envelope"></i>
                      </ListItemIcon>
                      <ListItemText primary="Email" />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs>
                  <Typography className={classes.Logo} variant="h4">C.L</Typography>
                  <Typography className={classes.Naming} variant="h6">Christopher Lim</Typography>
                  <p>This online Profile is developed using React, Material-UI and Font-awesome. Best viewed in desktop view, 1920 x 1080</p>
                </Grid>
              </Grid>
            </Container>
          </Container>
      </React.Fragment>
      </Element>
    );
}

export default ContactSection;