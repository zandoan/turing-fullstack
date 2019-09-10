import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import React from "react";
import Select from "@material-ui/core/Select";

export default function CartSelectors(props) {
  const { data } = props;
  const { attributes } = data;
  const { color, quantity, size } = attributes;
  const { cartItemID } = data;
  const { onUpdateCart } = props;
  const [values, setValues] = React.useState({
    color,
    quantity,
    size,
    cartItemID
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
    onUpdateCart({ [event.target.name]: event.target.value }, cartItemID);
  }

  return (
    <form autoComplete="off">
      <FormControl>
        <InputLabel htmlFor="color">Color</InputLabel>
        <Select
          value={values.color}
          onChange={handleChange}
          inputProps={{
            name: "color"
          }}
        >
          {[
            "White",
            "Black",
            "Red",
            "Orange",
            "Yellow",
            "Green",
            "Blue",
            "Indigo",
            "Purple"
          ].map(item => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="size">Size</InputLabel>
        <Select
          value={values.size}
          onChange={handleChange}
          inputProps={{
            name: "size"
          }}
        >
          {["S", "M", "L", "XL", "XXL"].map(item => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="quantity">Quantity</InputLabel>
        <Select
          value={values.quantity}
          onChange={handleChange}
          inputProps={{
            name: "quantity"
          }}
        >
          {[...Array(10).keys()].map((item, idx) => (
            <MenuItem value={idx + 1} key={String(idx + 1)}>
              {idx + 1}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
}

CartSelectors.propTypes = {
  data: PropTypes.shape({
    cartItemID: PropTypes.string,
    attributes: PropTypes.shape({
      color: PropTypes.string,
      quantity: PropTypes.number,
      size: PropTypes.string
    })
  }).isRequired,
  onUpdateCart: PropTypes.func.isRequired
};
