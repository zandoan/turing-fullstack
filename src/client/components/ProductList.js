import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import React, { Component } from "react";
import axios from "axios";

import Product from "./Product";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: null };
  }

  componentDidMount() {
    axios.get("/api/products").then(products => {
      this.setState({ products: products.data });
    });
  }

  render() {
    const { products } = this.state;
    const { onAddToCart } = this.props;
    return (
      <div>
        <Grid container spacing={3}>
          {products ? (
            products.map(product => (
              <Grid item s="true" key={product.product_id}>
                <Product data={product} onAddToCart={onAddToCart} />
              </Grid>
            ))
          ) : (
            <h1>Loading products.. please wait!</h1>
          )}
        </Grid>
      </div>
    );
  }
}

ProductList.propTypes = {
  onAddToCart: PropTypes.func.isRequired
};
