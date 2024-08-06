import React from 'react';
import styled, { css } from 'styled-components';

// Styled components for Stepper
const StepperContainer = styled.div`
  display: table;
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;
  box-shadow: 0 3px 8px -6px rgba(0,0,0,.50);
`;

const Step = styled.div`
  display: table-cell;
  position: relative;
  padding: 24px;
  cursor: pointer;
  ${({ state }) => state === 'done' && css`
    .md-step-circle {
      background-color: rgb(33,150,243);
      &:before {
        content: "\\f00c";
        font-family: 'FontAwesome';
        font-weight: 100;
      }
    }
    .md-step-title {
      color: rgba(0,0,0,.87);
      font-weight: 600;
    }
  `}
  ${({ state }) => state === 'active' && css`
    .md-step-circle {
      background-color: #F96302;
    }
    .md-step-title {
      color: rgba(0,0,0,.87);
      font-weight: 600;
    }
  `}
  ${({ state }) => state === 'editable' && css`
    .md-step-circle {
      background-color: rgb(33,150,243);
      transform: scaleX(-1);
      &:before {
        content: "\\f040";
        font-family: 'FontAwesome';
        font-weight: 100;
      }
    }
  `}
`;

const StepCircle = styled.div`
  width: 30px;
  height: 30px;
  margin: 0 auto;
  background-color: #999999;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  font-weight: 600;
  color: #FFFFFF;
`;

const StepTitle = styled.div`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: rgba(0,0,0,.26);
`;

const StepOptional = styled.div`
  font-size: 12px;
  text-align: center;
  color: rgba(0,0,0,.26);
`;

const StepBarLeft = styled.div`
  position: absolute;
  top: 36px;
  height: 1px;
  border-top: 1px solid #DDDDDD;
  left: 0;
  right: 50%;
  margin-right: 20px;
`;

const StepBarRight = styled.div`
  position: absolute;
  top: 36px;
  height: 1px;
  border-top: 1px solid #DDDDDD;
  right: 0;
  left: 50%;
  margin-left: 20px;
`;

// Stepper component
const Stepper2 = ({ steps, currentStep }) => {
  return (
    <StepperContainer>
      {steps.map((step, index) => {
        const stepState = index < currentStep ? 'done' : index === currentStep ? 'active' : '';
        return (
          <Step key={index} state={step.editable ? 'editable' : stepState}>
            <StepCircle><span>{index + 1}</span></StepCircle>
            <StepTitle>{step.title}</StepTitle>
            {step.optional && <StepOptional>Optional</StepOptional>}
            {index !== 0 && <StepBarLeft />}
            {index !== steps.length - 1 && <StepBarRight />}
          </Step>
        );
      })}
    </StepperContainer>
  );
};

export default Stepper2;
