import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Footer = ({ onNext, onBack, currentStep, totalSteps }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, padding: 2 }}>
      <Button variant="contained" onClick={onBack} disabled={currentStep === 0}>
        Back
      </Button>
      <Button variant="contained" onClick={onNext} disabled={currentStep === totalSteps - 1}>
        Next
      </Button>
    </Box>
  );
};

Footer.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
};

export default Footer;
