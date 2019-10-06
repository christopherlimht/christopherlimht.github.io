import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import { shadows } from "@material-ui/system";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
      flexDirection: "column"
    }
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  content: {
    flex: "1 0 auto",
    alignSelf: "flex-start"
  },
  cover: {
    width: 250,
    height: 360
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  },
  cardContainer: {
    paddingTop: "20px"
  }
}));

function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Container className={classes.cardContainer} maxWidth="md">
      <Card className={classes.card}>
        <Box boxShadow={3}>
          <CardMedia
            className={classes.cover}
            image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            title="Live from space album cover"
          />
        </Box>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Mac Millerd
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Container>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired
};
export default MediaControlCard;
