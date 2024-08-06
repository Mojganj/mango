// TableComponent.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  background-color: #f4f4f4;
`;

const Th = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const TableComponent = ({ data }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleRowClick = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent('');
  };

  return (
    <div>
      <Table>
        <Thead>
          <Tr>
            <Th>Column 1</Th>
            <Th>Column 2</Th>
            <Th>Column 3</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              <Td onClick={() => handleRowClick(row[0])}>{row[0]}</Td>
              <Td>{row[1]}</Td>
              <Td>{row[2]}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
    </div>
  );
};

export default TableComponent;
