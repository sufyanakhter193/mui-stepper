import * as React from "react";
import "../../App.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { IProps } from "../interfaces";

const MUIStepper = styled(Stepper, {
  name: "MUIStepper",
  slot: "Wrapper",
})({
  "& .MuiStep-root": {
    width: "33vw",
    background: "#f4f5f7",
    margin: 2,
    padding: "1rem",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  "& .MuiSvgIcon-root": {
    width: "2rem",
    height: "2rem",
    marginRight: "8px",
    fontWeight: 500,
    color: "#D6EAF8",
  },
  "& .MuiStepIcon-text": {
    fill: "#4c9aff",
    fontSize: "10px",
  },
  "& .MuiStepIcon-root.Mui-active": {
    color: "#4c9aff",
  },
  "& .MuiStepIcon-root.Mui-active .MuiStepIcon-text": {
    fill: "#fff",
  },
  "& .MuiStepLabel-label.Mui-active": {
    color: "#4c9aff",
    fontWeight: 500,
  },
  "& svg circle": {
    r: 16,
  },
  "& .Mui-active": {
    backgound: "#fff",
  },
  "& .MuiStep-root.Mui-active": {
    background: "#fff",
  },
});

export const HorizontalStepper: React.FC<IProps> = ({ stepsData }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return stepsData.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? stepsData.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = false;
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: "100%" }}>
      <MUIStepper>
        <Stepper nonLinear activeStep={activeStep}>
          {stepsData.map((item, index) => (
            <Step key={item.id} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                <Typography fontSize={15} fontWeight="bold" textAlign="left">
                  {item.title}
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  textAlign="left"
                  color="#253858"
                >
                  {item.subTitle}
                </Typography>
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </MUIStepper>

      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Previous
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext} sx={{ mr: 1 }} variant="contained">
                Next Step
              </Button>
              {activeStep !== stepsData.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: "inline-block" }}
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {
                      completedSteps() === totalSteps() - 1
                      /*? "Finish"
                        : "Complete Step"*/
                    }
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
};
