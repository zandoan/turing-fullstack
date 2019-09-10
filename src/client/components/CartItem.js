import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SizeAttributeSelector from "./SizeAttributeSelector";
import ColorAttributeSelector from "./ColorAttributeSelector";
import QuantityAttributeSelector from "./QuantityAttributeSelector";
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
  const theme = useTheme();
  const { data, onRemoveFromCart } = props;
  return (
    <Card raised className={classes.card}>
      <CardMedia
        className={classes.cover}
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
          QTY: {data.attributes.quantity}
          Color: {data.attributes.color}
          Size: {data.attributes.size}
          <CartSelectors data={data.attributes} />
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
