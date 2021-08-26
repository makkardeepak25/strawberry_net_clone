import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import SettingsIcon from "@material-ui/icons/Settings";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import DoneOutlineSharpIcon from "@material-ui/icons/DoneOutlineSharp";
import { useDispatch, useSelector } from "react-redux";

import { getUserDetails } from "../../Redux/Auth/authAction";

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center"
  },
  active: {
    color: "#784af4"
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor"
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18
  }
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient(to right, #623381 80%,#c62f7a 80%,#ccc 30%)"
    }
  },
  completed: {
    "& $line": {
      backgroundImage: "linear-gradient(to right, #623381 30%,#c62f7a 100%)"
    }
  },
  line: {
   
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1
  }
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  active: {
    backgroundImage: "yellow",
    boxShadow: "linear-gradient(to right, #623381 30%,#c62f7a 100%)"
  },
  completed: {
    backgroundImage: "linear-gradient(to right, #623381 30%,#c62f7a 100%)"
  }
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <LocalShippingIcon />,
    3: <DoneOutlineSharpIcon />
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  
}));

// +(date.toDateString())
function getSteps() {
  return ["Processing", "Shipped", "Delivered"];
}



export default function CustomizedSteppers({order,isLoading,isError}) {
  



 

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);


 
 const {orderStatus,date} =order
  

 
  const obj ={
    "Processing":1,
    "Shipped":2,
    "Delivered":3,

  }
  const dates ={
  }
   dates[orderStatus]=date

 
  const steps = getSteps();
 
  
  React.useEffect(() =>{
    setActiveStep(obj[orderStatus])
   
  },[orderStatus])





  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label, i) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <div>
                {label}
                <br />
               {dates[label] && dates[label] }
              </div>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
     
    </div>
  );
}
