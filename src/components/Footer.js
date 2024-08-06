// Footer.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  margin-right: 70px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  color: #ffffff;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 1rem;
`;

const SubmitButton = styled(Button)`
  background-color: #10b981; // Green color for Next
`;

const BackButton = styled(Button)`
  background-color: #6b7280; // Gray color for Back
`;

const Footer = ({ currentStep, totalSteps }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine the current page index based on URL path
  const pages = [
    { path: '/', name: 'Page 1' },
    { path: '/page2', name: 'Page 2' },
    { path: '/page3', name: 'Page 3' },
  ];

  const currentPageIndex = pages.findIndex((page) => page.path === location.pathname);

  const handleNext = () => {
    if (currentPageIndex < pages.length - 1) {
      navigate(pages[currentPageIndex + 1].path);
    }
  };

  const handleBack = () => {
    if (currentPageIndex > 0) {
      navigate(pages[currentPageIndex - 1].path);
    }
  };

  return (
    <FooterContainer>
      {currentStep < totalSteps - 1 && (
        <SubmitButton onClick={handleNext}>Next</SubmitButton>
      )}

      {currentStep > 0 && (
        <BackButton onClick={handleBack}>Back</BackButton>
      )}
    </FooterContainer>
  );
};

export default Footer;
