import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import CartSelectors from "./CartSelectors";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "100px"
  },
  details: {
    display: "flex",
    flexDirection: "row"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: "150px"
  },
  attributes: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  removeItem: {
    backgroundColor: "red",
    width: "100px"
  }
}));

const CartItem = props => {
  const classes = useStyles();
  const { data, onRemoveFromCart, onUpdateCart } = props;
  return (
    <Card raised className={classes.card}>
      <CardMedia
        className={classes.cover}
        // eslint-disable-next-line import/no-dynamic-require,  global-require
        image={require(`../product_images/${data.thumbnail}`)}
        title={data.name}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {data.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {data.discounted_price !== 0 ? (
              <>${data.discounted_price}</>
            ) : (
              <>${data.price}</>
            )}
          </Typography>
        </CardContent>
        <div className={classes.attributes}>
          <CartSelectors data={data} onUpdateCart={onUpdateCart} />
        </div>
      </div>
      <Button
        className={classes.removeItem}
        onClick={() => {
          onRemoveFromCart(data);
        }}
      >
        Remove Item
      </Button>
    </Card>
  );
};

export default CartItem;

CartItem.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    image_2: PropTypes.string,
    price: PropTypes.number,
    discounted_price: PropTypes.number,
    description: PropTypes.string,
    thumbnail: PropTypes.string
  }).isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
  onUpdateCart: PropTypes.func.isRequired
};
