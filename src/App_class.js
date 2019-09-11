import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Header from './Components/Header/Header.js';
import MainContentA from './Components/MainContentA/MainContentA.js';
import MainContentB from './Components/MainContentB/MainContentB.js';
import Footer from './Components/Footer/Footer.js'


const useStyles = (theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    mainContentA: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
      height: '100vh',
      alignItems: 'center',
      display:'flex'
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2),
    },
  });

class App extends React.Component{

    constructor(props){
        super(props);
        this.MainContentA = React.createRef();
        this.MainContentB = React.createRef();
        this.Footer = React.createRef();
        this.scrollToContent = this.scrollToContent.bind(this);
    }
    scrollToContent(content) {
      switch(content) {
        case 1:
          this.MainContentA.current.scrollIntoView({behavior: 'smooth'});
          break;
        case 2:
          this.MainContentB.current.scrollIntoView({behavior: 'smooth'});
          break;
        case 3:
          this.Footer.current.scrollIntoView({behavior: 'smooth'});
          break;
      }
    }
    render(){
        const {classes} = this.props;
        return (
          <React.Fragment>
            <CssBaseline />
            <Header icon={classes.icon}/>
            <main>
              {/* Hero unit */}
              <div ref={this.MainContentA}/>
              <MainContentA classes={classes} handleClick={this.scrollToContent} />
              <div ref={this.MainContentB}/>
              <MainContentB classes={classes}/>
              
              
            </main>
            {/* Footer */}
            <div ref={this.Footer}/>
            <Footer classes={classes}/>
        </React.Fragment>
        )
    }
}

export default withStyles(useStyles)(App);