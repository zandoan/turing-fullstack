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

const Payments = props => {
  const [paymentData, setPaymentData] = React.useState({
    code: "",
    creditCard: "",
    expiration: "",
    name: ""
  });
  const [labelWidth, setLabelWidth] = React.useState([...Array(4).keys(null)]);
  const itemsRef = React.useRef([]);
  const classes = useStyles();

  React.useEffect(() => {
    const final = [...labelWidth].map((label, idx) => {
      return itemsRef.current[idx].offsetWidth;
    });
    setLabelWidth(final);
  }, [paymentData]);

  const handleChange = name => event => {
    setPaymentData({ ...paymentData, [name]: event.target.value });
  };
  return (
    <div className={classes.container}>
      {["creditCard", "code", "expiration", "name"].map((paymentInput, i) => {
        return (
          <FormControl
            className={classes.formControl}
            variant="outlined"
            key={paymentInput}
          >
            <InputLabel
              ref={el => (itemsRef.current[i] = el)}
              htmlFor={paymentInput}
            >
              {paymentInput}
            </InputLabel>
            <OutlinedInput
              id={paymentInput}
              labelWidth={labelWidth[i]}
              name={paymentInput}
              onChange={handleChange(paymentInput)}
              error={paymentData[paymentInput].length === 0}
              value={paymentData[paymentInput]}
              required
            />
            <FormHelperText id={paymentInput}>Required*</FormHelperText>
          </FormControl>
        );
      })}
      <Button
        onClick={() => {
          console.log("confirm payment");
          console.log(paymentData);
        }}
      >
        Confirm Payment
      </Button>
    </div>
  );
};

export default Payments;
