import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import ProductDetail from './ProductDetail';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    position: 'absolute',
    width: '75%',
    height: '75%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function ProductModal(props) {
  const classes = useStyles();
  const { data, toggleModal } = props;
  const handleClose = () => {
    toggleModal();
  };

  return (
    <>
      <Modal
        open
        onClose={handleClose}
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <DialogContent className={classes.paper}>
          <Fade>
            <ProductDetail data={data} />
          </Fade>
        </DialogContent>
      </Modal>
    </>
  );
}
