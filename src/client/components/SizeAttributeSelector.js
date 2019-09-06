import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function SizeAttributeSelector(props) {
  const [value, setValue] = React.useState("null");
  const { handleToggleAttribute } = props;

  function handleChange(event) {
    setValue(event.target.value);
    handleToggleAttribute("size", event.target.value);
    // console.log(event.target.value);
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
        <FormControlLabel
          value="S"
          control={<Radio color="primary" />}
          label="S"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="M"
          control={<Radio color="primary" />}
          label="M"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="L"
          control={<Radio color="primary" />}
          label="L"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="XL"
          control={<Radio color="primary" />}
          label="XL"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="XXL"
          control={<Radio color="primary" />}
          label="XXL"
          labelPlacement="bottom"
        />
      </RadioGroup>
    </FormControl>
  );
}
