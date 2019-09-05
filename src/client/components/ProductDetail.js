import React, { forwardRef, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  discount: {
    textDecoration: "line-through"
  }
}));

const ProductDetail = forwardRef((props, ref) => {
  const classes = useStyles();
  const { data } = props;
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
                  {data.discounted_price !== 0
                    ? "Do this"
                    : "show original price"}
                  <Typography gutterBottom variant="h5" component="h2">
                    Original Price ${data.price}
                  </Typography>
                  <h3 className={classes.discount}>
                    Sale Price
                    {data.discounted_price}
                  </h3>
                  <Typography gutterBottom variant="p">
                    {data.description}
                  </Typography>
                  <>Quantitity Selector</>

                  <>Size Selector</>

                  <>Color Selector</>

                  <>Add to cart</>
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
