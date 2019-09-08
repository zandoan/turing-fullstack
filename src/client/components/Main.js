import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React, { useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";
import ProductList from "./ProductList";
import CartSideItem from "./CartSideItem";

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    backgroundColor: "#0390C7",
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  },
  title: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar
}));

const Main = props => {
  const classes = useStyles();
  const {
    cart,
    categories,
    departments,
    onAddToCart,
    onRemoveFromCart,
    username
  } = props;
  // console.log("INSIDE MAIN");
  // console.log(departments);
  // console.log(username);
  const [selectedDepartment, toggleDepartment] = useState(null);
  const [selectedCategory, toggleCategory] = useState(null);
  const [selectedDepartmentIndex, setSelectedIndexDepartment] = useState(null);
  const [selectedCategoryIndex, setSelectedIndexCategory] = useState(null);

  function handleListItemClick(event, index, type) {
    if (type === "department") {
      setSelectedIndexDepartment(index);
    } else if (type === "category") {
      setSelectedIndexCategory(index);
    }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            TShirtShop2
          </Typography>
          <Button color="inherit">Login / Signup</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <img
          src="https://github.com/zandoan/turing-fullstack/blob/master/Images/images/tshirtshop.png?raw=true"
          alt="logo"
        />
        <Divider />
        Search Field Box
        <List>
          <ListItemText primary="Department" />
          {departments != null &&
            departments.map((department, index) => (
              <ListItem
                button
                key={department.department_id}
                selected={selectedDepartmentIndex === index}
                onClick={event => {
                  toggleDepartment(department.department_id);
                  handleListItemClick(event, index, "department");
                }}
              >
                <ListItemText primary={department.name} />
              </ListItem>
            ))}
        </List>
        <Divider />
        <List>
          <ListItemText primary="Category" />
          {categories != null &&
            categories
              .filter(category => category.department_id === selectedDepartment)
              .map((category, index) => (
                <ListItem
                  button
                  key={category.category_id}
                  selected={selectedCategoryIndex === index}
                  onClick={event => {
                    toggleCategory(category.category_id);
                    handleListItemClick(event, index, "category");
                  }}
                >
                  <ListItemText
                    primary={category.name}
                    onClick={() => {
                      toggleCategory(category.category_id);
                    }}
                  />
                </ListItem>
              ))}
        </List>
        <Divider />
        <List>
          <ListItemText primary="Cart" />
          {cart && cart.length
            ? cart.map((product, index) => (
                <ListItem
                  button
                  key={product.product_id}
                  onClick={() => {
                    console.log("cart item clicked");
                  }}
                >
                  <CartSideItem
                    data={product}
                    onRemoveFromCart={onRemoveFromCart}
                  />
                </ListItem>
              ))
            : "Cart Empty"}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {username ? (
          <h1>
            Welcome back,
            {username}
          </h1>
        ) : (
          <h1>Loading Username...</h1>
        )}
        <ProductList onAddToCart={onAddToCart} />
      </main>
    </div>
  );
};

const mapStateToProps = cart => {
  return {
    cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: () => dispatch({ type: "ADD" }),
    removeFromCart: () => dispatch({ type: "REMOVE" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
