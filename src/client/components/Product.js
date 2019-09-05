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
  const { data } = props;

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
            alt={data.name}
            height="240"
            image={require(`../product_images/${data.image}`)}
            title={data.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {data.name}
            </Typography>
            {data.discounted_price !== 0
              ? `Sale: $${data.discounted_price} vs $${data.price}`
              : `$${data.price}`}
          </CardContent>
        </CardActionArea>
      </ButtonBase>
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
