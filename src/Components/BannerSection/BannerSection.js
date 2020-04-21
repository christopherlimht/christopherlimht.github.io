import React from 'react';
import Container from '@material-ui/core/Container';
import './BannerSection.css';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
const styles = theme => ({
  BannerBackground: {
    backgroundColor:"black",
    padding:0,
    height:'100%'
  },
  descriptor:{
    display:'inline-flex',
    backgroundColor:'#fde400',
    color:'#101820FF',
    fontWeight:'700',
    paddingLeft:'5px',
    paddingRight:'5px',
    minWidth:'260px',
    marginLeft:'5px',
    justifyContent:'center'
  },
  buttonsContainer:{
    display:'flex',
    justifyContent:'center',
    marginTop:'10px',
  },
  button:{
    paddingLeft:'10px',
    paddingRight:'10px',
    color:'white'
  }
})
// #FEE715FF
class BannerSectionClass extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count:1,
      description:'Backend Developer',
      openToast:false
    }
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      5000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    const descriptions = ["Backend Developer","Devops Engineer","Tech Enthusiast"]
    var counter = this.state.count;
    var description = "";
    if(counter===3){
      description = descriptions[0];
      counter = 1
    }else if(counter===1){
      description = descriptions[1];
      counter = counter+1;
    }else if(counter===2){
      description = descriptions[2];
      counter = counter+1;
    }
    this.setState(({
      count: counter,
      description:description
    }));
    console.log(counter);
    console.log(description)
  }
  copyToClipBoard = (content) =>{
    navigator.clipboard.writeText(content);
    console.log("copyToClipBoard")
    this.setState(({
      openToast:true
    }))
  }
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState(({
      openToast:false
    }))
  };
  render(){
    const { classes } = this.props;
    const externalLink = (url) => {
      window.location.href = url
    }
    return(
      <React.Fragment>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.openToast}
          autoHideDuration={6000}
          onClose={()=>this.handleClose()}
          message="My email is copied to your clipboard"
          action={
            <React.Fragment>
              <Button color="secondary" size="small" onClick={()=>this.handleClose()}>
                Close
              </Button>
              <IconButton size="small" aria-label="close" color="inherit" onClick={()=>this.handleClose()}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
        <Container className={classes.BannerBackground} maxWidth={false}>
          <div className="hero-image">
            <div className="hero-text">
              <h1 className="bigname">I am Christopher Lim</h1>
              And I'm a <div className={classes.descriptor}>{this.state.description}</div>
              <div className={classes.buttonsContainer}>
                <div >
                  <IconButton className={classes.button} onClick={()=>externalLink('http://www.linkedin.com/in/christopher-limht')}>
                    <i className="fab fa-linkedin"></i>
                  </IconButton>
                </div>
                <div>
                  <IconButton className={classes.button} onClick={()=>this.copyToClipBoard('christopherlimht@gmail.com')}>
                    <i className="fas fa-envelope"></i>
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(BannerSectionClass);