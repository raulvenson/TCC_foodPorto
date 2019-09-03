import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import './Modal.css'
import { TiStarOutline } from 'react-icons/ti';

import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';


const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default props => {
  
  const [value, setValue] = React.useState(2);
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
      <TiStarOutline onClick={handleOpen}/>
      
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
            <Box component="fieldset" mb={1} borderColor="transparent">
              <h2 id="transition-modal-title">AVALIE O RESTAURANTE{props.h2}</h2>
              <div id="transition-modal-title">Dê uma nota à qualidade do serviço:</div>
              <Rating
                className="rating"
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>          
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
