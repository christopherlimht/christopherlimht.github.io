import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './ProjectSegment.css';
//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12];
const cards = [1, 2, 3,4];
function ProjectSegment(props){
    return(
        <Grid container spacing={0} className='ProjectSegment'>
            <Grid item className='TitleContainer'>
                <Container maxWidth={false}>
                    <Typography className='Title' variant="h4" color="inherit" noWrap>
                        Projects
                    </Typography>
                </Container>
            </Grid>
            <Grid item xs={12} className='CardsContainer'>
                <Container className={props.classes.cardGrid} maxWidth="lg">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map(card => (
                        <Grid item key={card} xs={12} sm={6} md={3}>
                            <Card raised={true} className={props.classes.card}>
                            <CardMedia
                                className={props.classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            <CardContent className={props.classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Heading
                                </Typography>
                                <Typography>
                                    This is a media card. You can use this section to describe the content.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" className='CardButton'>
                                View
                                </Button>
                                <Button size="small" className='CardButton'>
                                Edit
                                </Button>
                            </CardActions>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                </Container>
            </Grid>
        </Grid> 
    )
}
export default ProjectSegment;