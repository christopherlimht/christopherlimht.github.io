import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Element } from 'react-scroll'
import Grid from '@material-ui/core/Grid';
import ImgMediaCard from '../GenericComponents/ImgMediaCard/ImgMediaCard';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    BannerBackground: {
      backgroundColor:"#f6f5f5",
      minHeight:`calc(70vh)`
    },
    gridContainer:{
        paddingTop:'90px',
        paddingBottom:'112px',
        height:'100%'
    },
    gridItems:{
      display:'flex',
      justifyContent:'center'
    },
    title:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      marginBottom:'40px'
    },
    rounded:{
      borderTop: "2px solid #bbb",
      borderRadius: "5px",
      width:"60%",
      maxWidth:'200px',
      marginTop:'20px'
    }
  })
)

const projects = [
  {title: "Portfolio Website", mediaImage: "./website.jpg",cardContent:"Portfolio website for github pages and showcasing of projects",url:"https://github.com/christopherlimht/christopherlimht.github.io"},
];

function ProjectsSection() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container className={classes.BannerBackground} maxWidth={false}>
              <Container className={classes.gridContainer} width='xl'>
                <div name="title" className={classes.title}>
                  <Element name="myProjects">
                    <Typography variant="h4" >My projects</Typography>
                  </Element>
                  <hr className={classes.rounded}></hr>
                </div>
                
                <Grid container spacing={3}>
                  {projects.map((project, index) =>
                    <Grid item xs={12} sm={6} md={6} lg={4} className={classes.gridItems} key={index}>
                      <ImgMediaCard input={project}></ImgMediaCard>
                    </Grid>
                  )}
                </Grid>
              </Container>
            </Container>
        </React.Fragment>
    );
}

export default ProjectsSection;