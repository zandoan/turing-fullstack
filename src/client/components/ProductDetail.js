import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React, { forwardRef, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  discount: {
    color: "red"
  },
  original: {
    textDecoration: "line-through"
  }
}));

const ProductDetail = forwardRef((props, ref) => {
  const classes = useStyles();
  const { data, onAddToCart } = props;
  const [image, toggleImage] = useState(data.image);

  function handleToggleImage(pick) {
    toggleImage(pick);
  }

  return (
    <>
      <Container ref={ref}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={1}
        >
          <Grid item md={6}>
            <Paper>
              <Card>
                <CardContent height="300" width="240">
                  <CardMedia
                    component="img"
                    alt={data.name}
                    image={require(`../product_images/${image}`)}
                  />
                  <img
                    onClick={() => {
                      handleToggleImage(data.image);
                    }}
                    src={require(`../product_images/${data.image}`)}
                  />
                  <img
                    onClick={() => {
                      handleToggleImage(data.image_2);
                    }}
                    src={require(`../product_images/${data.image_2}`)}
                  />
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item md={6}>
            <Paper>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {data.name}
                  </Typography>
                  {data.discounted_price !== 0 ? (
                    <>
                      <h2 className={classes.discount}>
                        ON SALE for ${data.discounted_price}
                      </h2>
                      <h3 className={classes.original}>${data.price}</h3>
                    </>
                  ) : (
                    <h2>${data.price}</h2>
                  )}
                  <Typography gutterBottom variant="body1">
                    {data.description}
                  </Typography>
                  <>Quantitity Selector</>
                  <>Size Selector</>
                  <>Color Selector</>
                  <button
                    type="button"
                    onClick={() => {
                      onAddToCart(data);
                    }}
                  >
                    Add to cart
                  </button>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
});

export default ProductDetail;
