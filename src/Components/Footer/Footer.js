
import React from 'react';
import Typography from '@material-ui/core/Typography';
import './Footer.css';
function Copyright() {
    return (
      <Typography className="FooterText" align="center">
        {'Created using React and Material-UI'}
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
