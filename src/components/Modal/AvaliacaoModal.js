import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';

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
  rating1: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
}));

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function IconContainer(props) {
  const { value, ...other } = props;
  return (
    <Tooltip title={labels[value] || ''}>
      <div {...other} />
    </Tooltip>
  );
}
IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};


export default props => {
  
  const value = 2;
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const updateInput = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // }
  

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
            <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Avalie o Restaurante!</Typography>
              <Rating
                name="hover-tooltip"
                value={value}
                precision={0.5}
                IconContainerComponent={IconContainer}
              />
              <input
                type="text"
                name="obs"
                placeholder="Dê sua opinião !"
                
              />
              <button>Enviar</button>
            </Box>         
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
