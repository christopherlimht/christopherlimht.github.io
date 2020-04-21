import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    BannerBackground: {
      backgroundColor:"white",
      minHeight:'437px'
    },
  })
)

function ContentSection() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container className={classes.BannerBackground} maxWidth={false}>asd</Container>
        </React.Fragment>
    );
}

export default ContentSection;