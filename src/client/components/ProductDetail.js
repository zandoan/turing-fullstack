import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React, { forwardRef, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import SizeAttributeSelector from "./SizeAttributeSelector";
import ColorAttributeSelector from "./ColorAttributeSelector";
import QuantityAttributeSelector from "./QuantityAttributeSelector";

const useStyles = makeStyles(theme => ({
  discount: {
    color: "red"
  },
  original: {
    textDecoration: "line-through"
  },
  addToCart: {
    backgroundColor: "red"
  },
  mainImage: {
    maxWidth: "100%",
    maxHeight: "100%"
  },
  thumbnailContainer: {
    width: "160px",
    display: "flex",
    flexDirection: "row"
  },
  thumbnail: {
    width: "60px",
    height: "100%",
    margin: 10
  }
}));

const ProductDetail = forwardRef((props, ref) => {
  const classes = useStyles();
  const { data, handleClose, onAddToCart } = props;
  const [image, toggleImage] = useState(data.image);
  const [attributes, setAtrribute] = useState({
    quantity: 1,
    size: "S",
    color: "White"
  });

  const handleToggleAttribute = (attribute, value) => {
    setAtrribute({
      ...attributes,
      [attribute]: value
    });
  };

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
                <CardContent>
                  <CardMedia
                    className={classes.mainImage}
                    component="img"
                    alt={data.name}
                    image={require(`../product_images/${image}`)}
                  />
                  <div className={classes.thumbnailContainer}>
                    <Card className={classes.thumbnail}>
                      <CardMedia
                        alt="img1"
                        component="img"
                        onClick={() => {
                          handleToggleImage(data.image);
                        }}
                        image={require(`../product_images/${data.image}`)}
                      />
                    </Card>
                    <Card className={classes.thumbnail}>
                      <CardMedia
                        alt="img2"
                        component="img"
                        onClick={() => {
                          handleToggleImage(data.image_2);
                        }}
                        image={require(`../product_images/${data.image_2}`)}
                      />
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid
            item
            md={6}
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
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
                  <Container>
                    <QuantityAttributeSelector
                      handleToggleAttribute={handleToggleAttribute}
                    />
                  </Container>
                  <Container>
                    <SizeAttributeSelector
                      handleToggleAttribute={handleToggleAttribute}
                    />
                  </Container>
                  <Container>
                    <ColorAttributeSelector
                      handleToggleAttribute={handleToggleAttribute}
                    />
                  </Container>
                  <Button
                    className={classes.addToCart}
                    onClick={() => {
                      onAddToCart(data, attributes);
                      handleClose();
                    }}
                  >
                    Add to cart
                  </Button>
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
