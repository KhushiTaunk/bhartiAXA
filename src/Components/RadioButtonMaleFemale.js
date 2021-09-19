import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function FormControlLabelPlacement() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top">

        <FormControlLabel
          value="start"
          control={<Radio color="primary" />}
          label="Male"
          labelPlacement="start"
        />
        <FormControlLabel
          value="start"
          control={<Radio color="primary" />}
          label=" Female"
          labelPlacement="start"
         />
        
      </RadioGroup>
    </FormControl>
  );
}
