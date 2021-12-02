import { Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';


export default function StepperComponent({ activeStep = 0 }) {
  
  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
    >
      {['Select service', 'Pick a time', 'Personal Info', 'Place Order'].map(
        (step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        )
      )}
    </Stepper>
  );
}
