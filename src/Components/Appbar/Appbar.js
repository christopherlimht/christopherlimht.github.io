import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/styles';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import './Appbar.css'
var Scroll = require('react-scroll');
var scroller = Scroll.scroller;
const styles = theme => ({
    AppBarSolid: {
      backgroundColor:"#101010"
    },
    AppBarTransparent:{
      backgroundColor:"Transparent"
    },
    Logo:{
      color:'black',
      fontFamily:'"Bebas Neue",cursive',
      fontWeight:'700',
      backgroundColor:'white',
      letterSpacing:'0.1em',
      paddingLeft:'5px',
      paddingRight:'5px'
    },
    AppbarLinks:{
      color:'white',
      fontFamily:'"Bebas Neue",cursive',
      fontWeight:'400',
      letterSpacing:'0.2em',
    }
})
class AppBarClass extends React.Component{
  constructor(props){
    super(props)
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      appBarSolid:false,
      count:1,
      description:''
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(e) {
    console.log('scroll event');
    console.log(window.pageYOffset);
    if(window.pageYOffset === 0){
      this.setState({
        appBarSolid:false
      })
    }else{
      this.setState({
        appBarSolid:true
      })
    }
  }
  render(){
    const { classes } = this.props;
    const click = (element,offset)=>scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: offset, // Scrolls to element + 50 pixels down the page
      
    });
    return(
      <React.Fragment>
        <CssBaseline />
            <AppBar position="fixed" className={this.state.appBarSolid? classes.AppBarSolid : classes.AppBarTransparent } elevation={this.state.appBarSolid? "4" : "0" }>
              <Toolbar>
                <div className="toolbarContent">
                  <Typography className={classes.Logo} variant="h4">C.L</Typography>
                  <Hidden smDown>
                    <div className="links">
                      <Button onClick={()=>click("myAbout",-100)}><Typography className={classes.AppbarLinks} variant="h6">About</Typography></Button>
                      <Button onClick={()=>click("myProjects",50)}><Typography className={classes.AppbarLinks} variant="h6">Projects</Typography></Button>
                      <Button onClick={()=>click("myContact",0)}><Typography className={classes.AppbarLinks} variant="h6">Contact</Typography></Button>
                    </div>
                  </Hidden>
                </div>  
              </Toolbar>
            </AppBar>
      </React.Fragment>
    )
  }
}

AppBarClass.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppBarClass);
