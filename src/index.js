import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppbarClass from './Components/Appbar/Appbar';
import BannerSection from './Components/BannerSection/BannerSection';
import AboutSection from './Components/AboutSection/AboutSection';
import ProjectsSection from './Components/ProjectsSection/ProjectsSection';
import ContactSection from './Components/ContactSection/ContactSection';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const breakpointValues = {
  xs: 0,
  sm: 500,
  md: 768,
  lg: 992,
  xl: 1200,
};

const theme = createMuiTheme({ 
  breakpoints: { 
    values: breakpointValues 
  }
});

ReactDOM.render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <AppbarClass></AppbarClass>
      <BannerSection></BannerSection>
      <AboutSection></AboutSection>
      <ProjectsSection></ProjectsSection>
      <ContactSection></ContactSection>
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
