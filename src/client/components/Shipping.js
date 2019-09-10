import React from "react";
import Button from "@material-ui/core/Button";
// import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1)
  }
}));
// shipping information

const Shipping = props => {
  const [labelWidth, setLabelWidth] = React.useState(0);
  const [shippingData, setShippingData] = React.useState({});
  const labelRef = React.useRef(null);
  const classes = useStyles();

  React.useEffect(() => {
    setLabelWidth(labelRef.current.offsetWidth);
  }, []);

  function handleChange(event) {
    setShippingData({
      ...shippingData,
      [event.target.name]: event.target.value
    });
  }
  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel ref={labelRef} htmlFor="firstName">
          First Name
        </InputLabel>
        <OutlinedInput
          id="firstName"
          value={shippingData.firstName}
          name="firstName"
          onChange={handleChange}
          labelWidth={labelWidth}
        />
      </FormControl>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel ref={labelRef} htmlFor="lastName">
          Last Name
        </InputLabel>
        <OutlinedInput
          id="lastName"
          value={shippingData.lastName}
          name="lastName"
          onChange={handleChange}
          labelWidth={labelWidth}
        />
      </FormControl>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel ref={labelRef} htmlFor="address1">
          Address
        </InputLabel>
        <OutlinedInput
          id="address1"
          value={shippingData.address1}
          name="address1"
          onChange={handleChange}
          labelWidth={labelWidth}
        />
      </FormControl>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel ref={labelRef} htmlFor="address2">
          Address 2
        </InputLabel>
        <OutlinedInput
          id="address2"
          value={shippingData.address2}
          name="address2"
          onChange={handleChange}
          labelWidth={labelWidth}
        />
      </FormControl>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel ref={labelRef} htmlFor="city">
          City
        </InputLabel>
        <OutlinedInput
          id="city"
          value={shippingData.city}
          name="city"
          onChange={handleChange}
          labelWidth={labelWidth}
        />
      </FormControl>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel ref={labelRef} htmlFor="state">
          State
        </InputLabel>
        <OutlinedInput
          id="state"
          value={shippingData.state}
          name="state"
          onChange={handleChange}
          labelWidth={labelWidth}
        />
      </FormControl>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel ref={labelRef} htmlFor="zip">
          Zip
        </InputLabel>
        <OutlinedInput
          id="zip"
          value={shippingData.zip}
          name="zip"
          onChange={handleChange}
          labelWidth={labelWidth}
        />
      </FormControl>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel ref={labelRef} htmlFor="country">
          Country
        </InputLabel>
        <OutlinedInput
          id="country"
          value={shippingData.country}
          name="country"
          onChange={handleChange}
          labelWidth={labelWidth}
        />
      </FormControl>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel ref={labelRef} htmlFor="email">
          Email
        </InputLabel>
        <OutlinedInput
          id="email"
          value={shippingData.email}
          name="email"
          onChange={handleChange}
          labelWidth={labelWidth}
        />
      </FormControl>

      <Button
        onClick={() => {
          console.log("confirm shipping");
        }}
      >
        Confirm Shipping
      </Button>
    </div>
  );
};

export default Shipping;
