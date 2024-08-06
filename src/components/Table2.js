import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TableRow from './TableRow';
import Modal from './Modal';

const TableStyled = styled.table`
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #e5e7eb;
`;

const TableHeaderCell = styled.th`
  padding: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
`;

const TableBody = styled.tbody``;

const Table2 = ({ data }) => {
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
    <>
      <TableStyled>
        <TableHead>
          <tr>
            {['Details', 'Additional Features', 'Support', 'Price', 'Plan'].map((header) => (
              <TableHeaderCell key={header}>{header}</TableHeaderCell>
            ))}
          </tr>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              details={row.details}
              additionalFeatures={row.additionalFeatures}
              support={row.support}
              price={row.price}
              onSelect={row.onSelect}
              onClick={() => handleRowClick(row.details)}
            />
          ))}
        </TableBody>
      </TableStyled>
      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
    </>
  );
};

Table2.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      details: PropTypes.string.isRequired,
      additionalFeatures: PropTypes.string.isRequired,
      support: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      onSelect: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default Table2;
