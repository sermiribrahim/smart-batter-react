import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  "Machine Starts",
  "Rice Loading",
  "Dal Loading",
  "water Loading"
];

export default function HorizontalLabelPositionBelowStepper() {
  return (
    <Box sx={{ width: "100%", mt: 3, p: 2 }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
