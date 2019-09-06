import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function ColorAttributeSelector(props) {
  const [value, setValue] = React.useState("null");
  const { handleToggleAttribute } = props;

  function handleChange(event) {
    setValue(event.target.value);
    handleToggleAttribute("color", event.target.value);
    // console.log(event.target.value);
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Color</FormLabel>
      <RadioGroup
        aria-label="position"
        name="position"
        value={value}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          value="White"
          control={<Radio color="primary" />}
          label="White"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="Black"
          control={<Radio color="primary" />}
          label="Black"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="Red"
          control={<Radio color="primary" />}
          label="Red"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="Orange"
          control={<Radio color="primary" />}
          label="Orange"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="Yellow"
          control={<Radio color="primary" />}
          label="Yellow"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="Green"
          control={<Radio color="primary" />}
          label="Green"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="Blue"
          control={<Radio color="primary" />}
          label="Blue"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="Indigo"
          control={<Radio color="primary" />}
          label="Indigo"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="Purple"
          control={<Radio color="primary" />}
          label="Purple"
          labelPlacement="bottom"
        />
      </RadioGroup>
    </FormControl>
  );
}
