import React, { useState } from 'react';
import Modal from './components/Modal';
import styled from 'styled-components';

const AppWrapper = styled.div`
  text-align: center;
  padding: 50px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background: #0056b3;
  }
`;

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <AppWrapper>
      <h1>React Modal Example</h1>
      <Button onClick={toggleModal}>Show Modal</Button>
      <Modal show={showModal} onClose={toggleModal}>
        <p>This is the modal content!</p>
      </Modal>
    </AppWrapper>
  );
}

export default App;
