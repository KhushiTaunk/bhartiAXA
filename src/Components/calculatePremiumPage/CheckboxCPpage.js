import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

{/* Checkbox Labels (Inside SimpleCard(cpPage).js) */}
const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
      fontFamily: 'SFPro',
      fontWeight: 'normal',
      fontSize: 12,
      marginLeft: '10px',
      marginRight: '10px',
      marginBottom: 15,
      marginTop: 15
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>

      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="I have read and understood the entire text, features, disclosures, benefit illustration and terms and conditions of the product. By submitting the details, I override my NDNC registration and agree to be contacted by Bharti AXA life through call, e-mail, SMS or WhatsApp
        "
      />
    
      
    </FormGroup>
  );
}

