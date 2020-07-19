import React from 'react';
import PropTypes from "prop-types";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Box } from '@material-ui/core';

MemberTA.propTypes = {
    FullName: PropTypes.string,
};
function MemberTA(props) {
  const { FullName } = props;  
  return (
      //<FormGroup aria-label="position" row>
      <Box display="flex" p={1} >
      <Box p={2} flexGrow={1} display="block">{ FullName }</Box>
      <Box p={1}><FormControlLabel
          value="top"
          control={<Checkbox color="primary" />}
          label="คจ"
          labelPlacement="end"
        /></Box>
        <Box p={1}><FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="คร"
          labelPlacement="end"
        /></Box>
        <Box p={1}><FormControlLabel
          value="bottom"
          control={<Checkbox color="primary" />}
          label="รว"
          labelPlacement="end"
        /></Box>
        </Box>
      //</FormGroup>
    
  );
}
export default MemberTA;