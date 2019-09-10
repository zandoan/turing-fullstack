import React from "react";
import PropTypes from "prop-types";
import Backdrop from "@material-ui/core/Backdrop";
import DialogContent from "@material-ui/core/DialogContent";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import ProductDetail from "./ProductDetail";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    position: "absolute",
    width: "75%",
    height: "75%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function ProductModal(props) {
  const classes = useStyles();
  const { data, onAddToCart, toggleModal } = props;

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
            <ProductDetail
              data={data}
              onAddToCart={onAddToCart}
              handleClose={handleClose}
            />
          </Fade>
        </DialogContent>
      </Modal>
    </>
  );
}

ProductModal.propTypes = {
  data: PropTypes.shape({}).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
};
