import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  button:{
    paddingLeft:'10px',
    paddingRight:'10px',
    color:'white'
  }
})
)
function CopyToClipboardButton() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick}>Open simple snackbar</Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton className={classes.button}>
              <i className="fas fa-envelope"></i>
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
export default CopyToClipboardButton;