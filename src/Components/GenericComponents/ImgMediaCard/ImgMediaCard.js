import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles({
  root: {
    minWidth: '250px',
    maxWidth: '300px'
  },
  cardContent:{
    paddingBottom:'0px'
  },
  divider:{
    marginTop:'16px'
  },
  cardActions:{
    paddingLeft:'11px'
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const externalLink = (url) => {
    window.location.href = url
  }
  const project = props.input
  console.log(project);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={project.mediaImage}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h6">
            {project.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {project.cardContent}
          </Typography>
          <Divider light className={classes.divider}/>         
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={()=>externalLink(project.url)}>
          Code Repo
        </Button>
      </CardActions>
    </Card>
  );
}