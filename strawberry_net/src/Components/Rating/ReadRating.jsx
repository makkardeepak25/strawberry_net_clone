import React from 'react';
import {Rating} from "@material-ui/lab";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
export default function SimpleRating({value}) {
  const StyledRating = withStyles({
    iconFilled: {
      color: '#662C90',
    },
    iconHover: {
      color: '#8654aa',
    },
  })(Rating);

  return (
    <>
      {/* <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box> */}

     
        <StyledRating color="blue" name="read-only" value={value} readOnly />


    </>
  );
}
