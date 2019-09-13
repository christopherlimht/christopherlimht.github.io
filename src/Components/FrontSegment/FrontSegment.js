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
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Album layout
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Something short and leading about the collection below—its contents, the creator, etc.
                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                entirely.
                </Typography>
                <div className={props.classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                        <Button variant="contained" color="primary" onClick={()=>props.handleClick(2)}>
                            Main call to action
                        </Button>
                        </Grid>
                        <Grid item>
                        <Button variant="outlined" color="primary" onClick={()=>props.handleClick(3)}>
                            Secondary action
                        </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default FrontSegment;