import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header.tsx';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Footer from './components/Footer';
import styled from 'styled-components';
import ProgressBar from './components/ProgressBar';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f9fafb;
  font-family: 'Noto+Kufi+Arabic'
  margin-top: '2rem';
`;

const HeaderContainer = styled.div`
  margin-top: 1rem;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const pages = [
  { path: '/', name: 'Page 1' },
  { path: '/page2', name: 'Page 2' },
  { path: '/page3', name: 'Page 3' },
];

const App = () => {
  const location = useLocation();

  // Determine current step based on URL path
  const currentPageIndex = pages.findIndex((page) => page.path === location.pathname);
  const currentStep = currentPageIndex === -1 ? 0 : currentPageIndex;

  return (
    <AppContainer>
      <Header/>
      <ProgressBar />
      <ContentContainer>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </ContentContainer>
      <Footer currentStep={currentStep} totalSteps={pages.length} />
    </AppContainer>
  );
};

export default App;