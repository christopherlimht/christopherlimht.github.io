import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Components/Header/Header.js';
import MainContentA from './Components/MainContentA/MainContentA.js';
import MainContentB from './Components/MainContentB/MainContentB.js';
import Footer from './Components/Footer/Footer.js'
  
  const useStyles = makeStyles(theme => ({
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
      padding: theme.spacing(6),
    },
  }));
  
  export default function App() {
    const classes = useStyles();
    return (
      <React.Fragment>
        <CssBaseline />
        <Header icon={classes.icon}/>
        <main>
          {/* Hero unit */}
          <MainContentA classes={classes}/>
          <MainContentB classes={classes}/>
        </main>
        {/* Footer */}
        <Footer classes={classes}/>
      </React.Fragment>
    );
  }