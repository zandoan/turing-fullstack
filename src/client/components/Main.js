import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ProductList from './ProductList';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    backgroundColor: '#0390C7',
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

export default function Main(props) {
  const classes = useStyles();
  const { categories, departments, username } = props;
  const [selectedDepartment, toggleDepartment] = useState(null);
  const [selectedCategory, toggleCategory] = useState(null);
  console.log('insidemain => ', departments);

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
          {departments != null
            && departments.map(department => (
              <ListItem button key={department.department_id}>
                <ListItemText
                  primary={department.name}
                  onClick={() => {
                    toggleDepartment(department.department_id);
                  }}
                />
              </ListItem>
            ))}
        </List>
        <Divider />
        <List>
          <ListItemText primary="Category" />
          {categories != null
            && categories
              .filter(category => category.department_id === selectedDepartment)
              .map(category => (
                <ListItem button key={category.category_id}>
                  <ListItemText
                    primary={category.name}
                    onClick={() => {
                      toggleCategory(category.category_id);
                    }}
                  />
                </ListItem>
              ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {username ? (
          <h1>
            Welcome back,
            {username.username}
          </h1>
        ) : (
          <h1>Loading Username...</h1>
        )}
        <ProductList />
      </main>
    </div>
  );
}
