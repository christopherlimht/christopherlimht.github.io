import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Header from './Components/Header/Header.js';
import FrontSegment from './Components/FrontSegment/FrontSegment.js';
import ProjectSegment from './Components/ProjectSegment/ProjectSegment.js';
import Footer from './Components/Footer/Footer.js'
import ContactSegment from './Components/ContactSegment/ContactSegment.js';

const useStyles = (theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    FrontSegment: {
      backgroundColor: '#121212',
      padding: theme.spacing(8, 0, 6),
      height: '100vh',
      alignItems: 'center',
      display:'flex'
    },
    ContactSegment:{
      backgroundColor: '#121212',
      minHeight: 'calc(100vh - 64px)',
      alignItems: 'center',
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
      padding: theme.spacing(2),
    },
  });

class App extends React.Component{

    constructor(props){
        super(props);
        this.FrontSegment = React.createRef();
        this.ProjectSegment = React.createRef();
        this.ContactSegment = React.createRef();
        this.scrollToContent = this.scrollToContent.bind(this);
    }
    
    scrollToContent(content) {
      switch(content) {
        case 1:
          this.FrontSegment.current.scrollIntoView({behavior: 'smooth'});
          console.log("Navigating to Home..")
          break;
        case 2:
          this.ProjectSegment.current.scrollIntoView({behavior: 'smooth'});
          console.log("Navigating to Project..")
          break;
        case 3:
          this.ContactSegment.current.scrollIntoView({behavior: 'smooth'});
          console.log("Navigating to Profile..")
          break;
      }
    }
    render(){
        const {classes} = this.props;
        return (
          <React.Fragment>
            <CssBaseline />
            <Header icon={classes.icon} handleDesktopClick={this.scrollToContent}/>
            <main>
              {/* Hero unit */}
              <div ref={this.FrontSegment} id='frontsegment'/>
              <FrontSegment classes={classes} handleClick={this.scrollToContent} />
              <div ref={this.ProjectSegment} id='project'/>
              <ProjectSegment classes={classes}/>
            </main>
            {/* Footer */}
            <div ref={this.ContactSegment} id='profile'/>
            <ContactSegment classes={classes}/>
            <Footer classes={classes}/>
        </React.Fragment>
        )
    }
}

export default withStyles(useStyles)(App);