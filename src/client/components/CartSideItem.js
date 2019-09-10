import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  removeItem: {
    backgroundColor: "red",
    width: "100%"
  }
}));

const CartSideItem = props => {
  const classes = useStyles();
  const { data, onRemoveFromCart } = props;
  return (
    <Card raised>
      <CardActionArea
        onClick={() => {
          // console.log("Will open modal to edit current item");
        }}
      >
        <CardMedia
          component="img"
          alt={data.name}
          height="80px"
          width="100%"
          // eslint-disable-next-line import/no-dynamic-require, global-require
          image={require(`../product_images/${data.thumbnail}`)}
          title={data.name}
        />
        <CardContent>
          {data.name}
          {data.discounted_price !== 0 ? (
            <>
              <h4>${data.discounted_price}</h4>
            </>
          ) : (
            <h4>${data.price}</h4>
          )}
          QTY: {data.attributes.quantity}, Color: {data.attributes.color}, Size:
          {data.attributes.size}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          className={classes.removeItem}
          onClick={() => {
            onRemoveFromCart(data);
          }}
        >
          Remove Item
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartSideItem;

CartSideItem.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    image_2: PropTypes.string,
    price: PropTypes.number,
    discounted_price: PropTypes.number,
    description: PropTypes.string,
    thumbnail: PropTypes.string,
    attributes: PropTypes.shape({
      quantity: PropTypes.number,
      color: PropTypes.string,
      size: PropTypes.string
    })
  }).isRequired,
  onRemoveFromCart: PropTypes.func.isRequired
};
