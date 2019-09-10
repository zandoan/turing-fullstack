import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import PropTypes from "prop-types";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import React from "react";

export default function SizeAttributeSelector(props) {
  const [value, setValue] = React.useState("null");
  const { handleToggleAttribute } = props;

  function handleChange(event) {
    setValue(event.target.value);
    handleToggleAttribute("size", event.target.value);
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Size</FormLabel>
      <RadioGroup
        aria-label="position"
        name="position"
        value={value}
        onChange={handleChange}
        row
      >
        {["S", "M", "L", "XL", "XXL"].map(item => (
          <FormControlLabel
            value={item}
            key={item}
            control={<Radio color="primary" />}
            label={item}
            labelPlacement="bottom"
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

SizeAttributeSelector.propTypes = {
  handleToggleAttribute: PropTypes.func.isRequired
};
