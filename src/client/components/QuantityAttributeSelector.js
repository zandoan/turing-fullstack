import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import React from "react";
import Select from "@material-ui/core/Select";

export default function QuantityAttributeSelector(props) {
  const [value, setValue] = React.useState(1);
  const { handleToggleAttribute } = props;

  function handleChange(event) {
    setValue(event.target.value);
    handleToggleAttribute("quantity", event.target.value);
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Quantity</FormLabel>
      <Select value={value} onChange={handleChange}>
        {[...Array(10).keys()].map((item, idx) => (
          <MenuItem value={idx + 1} key={String(idx + 1)}>
            {idx + 1}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

QuantityAttributeSelector.propTypes = {
  handleToggleAttribute: PropTypes.func.isRequired
};
