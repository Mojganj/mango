// Stepper.js
import React from 'react';
import styled from 'styled-components';

const StepperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #f3f4f6;
`;

const StepsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Step = styled.div`
  height: 0.5rem;
  width: 2rem;
  background-color: ${props => props.active ? '#fbbf24' : '#d1d5db'};
  border-radius: 0.25rem;
`;

const Stepper = ({ currentStep }) => (
  <StepperContainer>
    <StepsWrapper>
      {[0, 1, 2].map(step => (
        <Step key={step} active={step <= currentStep} />
      ))}
    </StepsWrapper>
  </StepperContainer>
);

export default Stepper;
