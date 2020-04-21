import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
  root: {
    marginTop:"15px",
    width: '100%',
    '& > * + *': {
      marginTop:'10px',
    },
  },
  skillbar:{
      paddingTop:'5px'
  },
  linearBar:{
      height:'10px',
  },
  skillDescriptor:{
      display:'flex',
      justifyContent:'space-between'
  }
});

class Skillbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            completed:50,
        }
    }
    render(){
        const { classes,skills } = this.props;
        const ColorLinearProgress = withStyles({
            colorPrimary: {
              backgroundColor: '#add2c9',
            },
            barColorPrimary: {
              backgroundColor: '#5ea3a3',
            },
        })(LinearProgress);
        return (
            <div className={classes.root}>
                {skills.map((skill, index) =>
                    <div className={classes.skillbar} name="skillbar" key={index}>
                        <div name="skillDescriptor" className={classes.skillDescriptor}>
                            <span>{skill.type}</span>
                            <span>{skill.level}%</span>
                        </div>
                        <ColorLinearProgress className={classes.linearBar} variant="determinate" value={skill.level} />
                    </div>
                )}
            </div>
        );
    }
}

export default withStyles(styles)(Skillbar);