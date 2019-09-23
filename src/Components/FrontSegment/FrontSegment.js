import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import "./FrontSegment.css"

function FrontSegment(props){
    return(
        <div className={props.classes.FrontSegment}>
            <Container maxWidth="sm" className='FrontSegment'>
                <Typography variant="h2" align="left" className='FirstText' gutterBottom>
                Christopher Lim
                </Typography>
                <Typography variant="h5" align="left" className="SecondaryText" paragraph>
                     Welcome to my profile <br></br> Backend Developer
                </Typography>
                <div className={props.classes.heroButtons}>
                    <Grid container spacing={2} justify="flex-start">
                        <Grid item>
                        <Button size="large" variant="outlined" className='buttons' onClick={()=>props.handleClick(2)}>
                            Projects
                        </Button>
                        </Grid>
                        <Grid item>
                        <Button size="large" variant="outlined" className='buttons' onClick={()=>props.handleClick(3)}>
                            Profile
                        </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default FrontSegment;