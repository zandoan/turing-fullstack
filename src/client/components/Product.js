import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import ProductModal from './ProductModal';

const useStyles = makeStyles({
  card: {
    maxWidth: 240
  }
});

export default function Product(props) {
  const classes = useStyles();
  const [showModal, toggleModal] = useState(false);

  function handleToggleModal() {
    toggleModal(!showModal);
  }

  return (
    <Card className={classes.card} raised>
      <ButtonBase
        onClick={() => {
          handleToggleModal();
        }}
      >
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
            {props.data.discounted_price !== 0
              ? `Sale: $${props.data.discounted_price} vs $${props.data.price}`
              : `$${props.data.price}`}
          </CardContent>
        </CardActionArea>
      </ButtonBase>
      {showModal ? (
        <ProductModal
          data={props.data}
          toggleModal={() => {
            handleToggleModal();
          }}
        />
      ) : null}
    </Card>
  );
}
