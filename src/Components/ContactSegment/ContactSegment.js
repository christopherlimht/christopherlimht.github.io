import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './ContactSegment.css';
import Profile from './Components/Profile.js'
function ContactSegment(props){
    return(
        <div className={props.classes.ContactSegment}>
        <Grid container spacing={0} className='ContactSegment'>
            <Grid item className='TitleContainer'>
                <Container maxWidth={false}>
                    <Typography className='Title' variant="h4" color="inherit" noWrap>
                        Profile
                    </Typography>
                </Container>
            </Grid>
        </Grid>
        <Container className={props.classes.cardGrid} maxWidth="lg">
            <Profile />
        </Container>
        </div>
    )
}

export default ContactSegment;