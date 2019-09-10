import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    display: "flex"
  }
}));

const Shipping = props => {
  const [shippingData, setShippingData] = React.useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: ""
  });
  const [labelWidth, setLabelWidth] = React.useState([...Array(8).keys(null)]);
  const itemsRef = React.useRef([]);
  const classes = useStyles();

  React.useEffect(() => {
    const final = [...labelWidth].map((label, idx) => {
      return itemsRef.current[idx].offsetWidth;
    });
    setLabelWidth(final);
  }, [shippingData]);

  const handleChange = name => event => {
    setShippingData({ ...shippingData, [name]: event.target.value });
  };

  return (
    <div className={classes.container}>
      {[
        "firstName",
        "lastName",
        "address1",
        "address2",
        "city",
        "zip",
        "state",
        "country"
      ].map((shippingInput, i) => {
        return (
          <FormControl
            className={classes.formControl}
            variant="outlined"
            key={shippingInput}
          >
            <InputLabel
              ref={el => (itemsRef.current[i] = el)}
              htmlFor={shippingInput}
            >
              {shippingInput}
            </InputLabel>
            <OutlinedInput
              id={shippingInput}
              labelWidth={labelWidth[i]}
              name={shippingInput}
              onChange={handleChange(shippingInput)}
              error={
                shippingInput !== "address2" &&
                shippingData[shippingInput].length === 0
              }
              value={shippingData[shippingInput]}
              required={shippingInput !== "address2"}
            />
            {shippingInput !== "address2" ? (
              <FormHelperText id={shippingInput}>Required*</FormHelperText>
            ) : null}
          </FormControl>
        );
      })}
      <Button
        onClick={() => {
          console.log("confirm shipping");
          console.log(shippingData);
        }}
      >
        Confirm Shipping
      </Button>
    </div>
  );
};

export default Shipping;
