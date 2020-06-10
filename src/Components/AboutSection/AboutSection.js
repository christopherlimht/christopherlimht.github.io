import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./AboutSection.css";
import Skillbar from '../GenericComponents/Skillbar/Skillbar';
import Hidden from '@material-ui/core/Hidden';
import { Element } from 'react-scroll'
var Scroll = require('react-scroll');
var scroller = Scroll.scroller;

const useStyles = makeStyles(theme => ({
    AboutSectionBackground: {
      backgroundColor:"white",
      minHeight:'calc(60vh)',
      height:'100%'
    },
    gridHeight:{
        height:'100%'
    },
    gridContainer:{
        paddingTop:'80px',
        paddingBottom:'60px',
        height:'100%'
    },
    paperHeight:{
        height:'100%',
        minHeight:"600px"
    },
    responsiveImage:{
        width: 'auto',
        height: '100%',
    },
    content:{
        height:'auto',
    },
    expertiseTitle:{
        marginBottom:'10px'
    }
  })
)
const ProjectButton = withStyles((theme) => ({
    root: {
      backgroundColor: 'white',
      color: '#488b8f',
      borderColor: '#488b8f',
      border: '1px solid',
      '&:hover': {
        backgroundColor: '#faf9f9',
        boxShadow: 'none',
      },
    },
}))(Button);


const SKILLS = [
    {type: "Java", level: 70},
    {type: "C#", level: 55},
    {type: "Node.js", level: 75},
    {type: "Javascript", level: 75},
    {type: "Angular", level: 40},
    {type: "React", level: 40},
    {type: "Python", level: 40},
];

function AboutSection() {
    const click = ()=>scroller.scrollTo('myProjects', {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: -100, // Scrolls to element + 50 pixels down the page
        
    });
    const classes = useStyles();
    return (
        <Element name="myAbout">
        <React.Fragment>
            <Container className={classes.AboutSectionBackground} maxWidth={false}>
                <Container className={classes.gridContainer} width='xl'>
                    <Grid container spacing={3} className={classes.gridHeight}>
                        <Grid item xs={6} sm={6} md={5}>
                            <Paper className={classes.paperHeight} elevation='0'>
                                <Grid className={classes.content} container spacing={1}>
                                    <Grid item xs={12}>
                                        <Typography name="title" variant="h4">About me</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div name="subContent" className={classes.subContent}>
                                            <p>
                                                Christopher here, I am a developer based in Singapore.<br/>
                                                I am currently working as a devops engineer at Singtel, where my job scope revolves around developing automated solutions.
                                            </p>
                                            <p>
                                                I am also a trained developer, having worked on a number of different projects which required knowledge in a wide range of languages, from developing microservices on NodeJS using javascript to developing chef inspec profiles using ruby.
                                                <br/>Being a tech enthusiast, I would be spending my free time either on exploring new technologies such as 3D graphics or tinkering and setting up my own computer systems and home labs.
                                            </p>
                                            <p>
                                                Through this small portfolio website of mine, I hope to showcase my skills and interests through projects I have completed in my free time.
                                            </p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div name="buttonGroup">
                                            <ProjectButton variant="contained" onClick={()=>click()}>
                                                My Projects
                                            </ProjectButton>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Hidden smDown>
                            <Grid item xs={3}>
                                <Paper className={classes.paperHeight} elevation='0'>
                                    <div className="about-image">                                   
                                    </div>
                                </Paper>
                            </Grid>
                        </Hidden>
                        
                        <Grid item xs={6} sm={6} md={4}>
                            <Paper className={classes.paperHeight} elevation='0'>
                                <Typography className={classes.expertiseTitle} name="title" variant="h4">My Expertise</Typography>
                                <Skillbar skills={SKILLS}></Skillbar>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </React.Fragment>
        </Element>
    );
}

export default AboutSection;