import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 240
  }
});

export default function Product(props) {
  const classes = useStyles();
  const [showModal, toggleModal] = useState(false);
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.data.name}
          height="240"
          image={require(`../product_images/${props.data.image}`)}
          title={props.data.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          ${props.data.price}
        </Button>
        <Button size="small" color="primary">
          {props.data.discounted_price !== 0
            ? `SALE PRICE: $${props.data.discounted_price}`
            : ""}
        </Button>
      </CardActions>
    </Card>
  );
}
