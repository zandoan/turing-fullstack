import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ProductModal from "./ProductModal";

const useStyles = makeStyles({
  card: {
    maxWidth: 240
  },
  discount: {
    color: "red"
  },
  original: {
    textDecoration: "line-through"
  }
});

export default function Product(props) {
  const classes = useStyles();
  const [showModal, toggleModal] = useState(false);
  const { data } = props;

  function handleToggleModal() {
    toggleModal(!showModal);
  }

  return (
    <Card className={classes.card} raised>
      <CardActionArea
        onClick={() => {
          handleToggleModal();
        }}
      >
        <CardMedia
          component="img"
          alt={data.name}
          height="240"
          image={require(`../product_images/${data.image}`)}
          title={data.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.name}
          </Typography>
          {data.discounted_price !== 0 ? (
            <>
              <h2 className={classes.discount}>${data.discounted_price}</h2>
              <h3 className={classes.original}>${data.price}</h3>
            </>
          ) : (
            <h2>${data.price}</h2>
          )}
        </CardContent>
      </CardActionArea>
      {showModal ? (
        <ProductModal
          data={data}
          toggleModal={() => {
            handleToggleModal();
          }}
        />
      ) : null}
    </Card>
  );
}
