import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12];
const cards = [1, 2, 3];
function ProjectSegment(props){
    return(
        <div style={{minHeight:'100vh',display:'flex',alignItems:'center'}}>
            <Container className={props.classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {cards.map(card => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className={props.classes.card}>
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
                            <Button size="small" color="primary">
                            View
                            </Button>
                            <Button size="small" color="primary">
                            Edit
                            </Button>
                        </CardActions>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}
export default ProjectSegment;