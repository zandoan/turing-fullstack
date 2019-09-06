import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import React from "react";

export default function CartSideItem(props) {
  const { data, onRemoveFromCart } = props;
  console.log(data);
  return (
    <Card raised height="50">
      <CardActionArea
        onClick={() => {
          console.log("cartsideitemclicked");
        }}
      >
        <CardMedia
          component="img"
          alt={data.name}
          height="80px"
          width="100%"
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
          QTY: 1, Color: Null, Size: M
        </CardContent>
      </CardActionArea>
      <CardActions>
        <button
          type="button"
          onClick={() => {
            onRemoveFromCart(data);
          }}
        >
          Remove
        </button>
      </CardActions>
    </Card>
  );
}
