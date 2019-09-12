
import React from 'react';
import Typography from '@material-ui/core/Typography';
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Created using React and Material-UI, '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


function footer(props){
    return(
        <div>
        <footer className={props.classes.footer}>
            <Copyright />
        </footer>
        </div>
    )
}

export default footer;
