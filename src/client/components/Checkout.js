import React from "react";
import Button from "@material-ui/core/Button";
// import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import CheckoutReview from "./CheckoutReview";
import OrderSummary from "./OrderSummary";
import Payments from "./Payments";
import Shipping from "./Shipping";

const useStyles = makeStyles(theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

// Use Amazon checkout as prototype
// shipping information
// display shipping estimate after entered
// payment information
// show final cart preview
// validation and verification/warnings
// connect to strip api
// on success, on fail - backend checks

const Checkout = props => {
  const classes = useStyles();
  const { cart, total, ship, checkout, payment } = props;
  // console.log(checkout);
  console.log(cart);

  const cartItemAmount = () => {
    return (
      <h1>
        Checkout (
        <Button
          onClick={() => {
            props.toggleView("Cart");
          }}
        >
          {(cart || []).length} items
        </Button>
        )
      </h1>
    );
  };
  return (
    <Paper>
      {cartItemAmount()}
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <div className={classes.root}>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    1. Shipping Information
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Shipping checkout={checkout} />
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    2. Payment Information
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Payments checkout={checkout} />
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    3 Review Item Information
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <CheckoutReview checkout={checkout} />
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <OrderSummary cart={cart} total={total} />
          </Paper>
        </Grid>
      </Grid>
      <Button
        onClick={() => {
          props.toggleView("Cart");
        }}
      >
        Back to Cart
      </Button>
      <Button
        onClick={() => {
          ship();
        }}
      >
        Redux Add shipping info magic!
      </Button>
      <Button
        onClick={() => {
          payment();
        }}
      >
        Redux Add payment info magic!
      </Button>
    </Paper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (item, id) => dispatch({ type: "ADD", val: item, id }),
    removeFromCart: item => dispatch({ type: "REMOVE", val: item }),
    getCartFromSession: id => dispatch({ type: "LOADSESSION", id }),
    updateCart: (item, id) => dispatch({ type: "UPDATE", val: item, id }),
    ship: () => dispatch({ type: "SHIPPING" }),
    payment: () => dispatch({ type: "PAYMENT" })
  };
};

const mapStateToProps = ({ checkout }) => ({ checkout });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
