// src/components/Stepper4.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

// Define the types for the props
interface StepProps {
  active?: boolean;
}

interface StepperProps {
  steps: { title: string }[];
}

const StepperContainer = styled.div`
  display: flex;
  flex-direction: row-reverse; /* For RTL layout */
  align-items: center;
`;

const Steps = styled.div`
  display: flex;
  flex-direction: row-reverse; /* For RTL layout */
  justify-content: space-between;
  flex-grow: 1;
`;

const Step = styled.div<StepProps>`
  text-align: center;
  flex: 1;

  .step-number {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.active ? '#007bff' : '#000')};
  }
`;

const StepNumber = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const StepTitle = styled.div`
  font-size: 1rem;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row-reverse; /* For RTL layout */
`;

const Button = styled.button`
  margin: 0 0.5rem;
`;

const Stepper4: React.FC<StepperProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <StepperContainer>
      <Steps>
        {steps.map((step, index) => (
          <Step key={index} active={index <= currentStep}>
            <StepNumber>{index + 1}</StepNumber>
            <StepTitle>{step.title}</StepTitle>
          </Step>
        ))}
      </Steps>
      <Buttons>
        <Button onClick={handlePrevious} disabled={currentStep === 0}>
          Previous
        </Button>
        <Button onClick={handleNext} disabled={currentStep === steps.length - 1}>
          Next
        </Button>
      </Buttons>
    </StepperContainer>
  );
};

export default Stepper4;
