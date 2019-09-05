import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product";

export default class ProductList extends Component {
  state = { products: null };

  componentDidMount() {
    fetch("/api/products")
      .then(res => res.json())
      .then(product => this.setState({ products: product }));
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <Grid container spacing={3}>
          {products ? (
            products.map(product => (
              <Grid item s="true" key={product.product_id}>
                <Product data={product} />
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
