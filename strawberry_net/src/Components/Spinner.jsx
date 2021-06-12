import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
      color: '#623381',
     
    },
   
  });
export const Spinner = () => {
    const classes = useStyles();
    return (
        <CircularProgress disableShrink classes={{root: classes.root}}/>
    )
}
