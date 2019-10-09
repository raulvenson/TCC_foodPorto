import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import './Modal.css';





const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    backgroundColor: '#ffc025',
  },
}));

export default props => {
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    
      <div type="button" onClick={handleOpen} variant="contained" className={classes.button}>
        <div className="font-title">{props.title}</div>
        <div className="font">{props.desc}</div>
        <div className="preco font">{props.price}</div>

      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="close-button" onClick={handleClose}>&times;</div>
            <h1 className="font-modal" id="transition-modal-title">{props.title}</h1>
            <img max-width="320px" alt="foto de batata" src={require(`../../assets/${props.path}/${props.img}`)}/>
            <hr/>
            <div className="preco font">{props.price}</div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
