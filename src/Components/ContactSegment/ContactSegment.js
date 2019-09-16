import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function ContactSegment(props){
    return(
        <div className={props.classes.ContactSegment}>
        <Grid container spacing={0} className='ProjectSegment'>
            <Grid item className='TitleContainer'>
                <Container maxWidth={false}>
                    <Typography className='Title' variant="h4" color="inherit" noWrap>
                        Profile
                    </Typography>
                </Container>
            </Grid>
        </Grid> 
        </div>
    )
}

export default ContactSegment;