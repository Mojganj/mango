import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableRowStyled = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: #f3f4f6;
  }
`;

const TableCell = styled.td`
  padding: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
`;

const TableRow = ({ details, additionalFeatures, support, price, onClick }) => {
  return (
    <TableRowStyled onClick={onClick}>
      <TableCell>{details}</TableCell>
      <TableCell>{additionalFeatures}</TableCell>
      <TableCell>{support}</TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>
        <button onClick={(e) => {
          e.stopPropagation();
        }}>
          Select
        </button>
      </TableCell>
    </TableRowStyled>
  );
};

TableRow.propTypes = {
  details: PropTypes.string.isRequired,
  additionalFeatures: PropTypes.string.isRequired,
  support: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TableRow;




















// // TableRow.js
// import React from 'react';
// import styled from 'styled-components';

// const TableRowStyled = styled.tr`
//   background-color: #ffffff;
//   border-bottom: 1px solid #e5e7eb;
// `;

// const TableCell = styled.td`
//   padding: 0.5rem;
// `;

// const DetailsContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
// `;

// const InfoIcon = styled.i`
//   color: #fbbf24;
// `;

// const CheckIcon = styled.i`
//   color: #10b981;
// `;

// const SelectButton = styled.button`
//   background-color: #fbbf24;
//   color: #ffffff;
//   padding: 0.5rem;
//   border-radius: 0.375rem;
// `;

// function TableRow({ details, additionalFeatures, support, price, onSelect }) {
//   return (
//     <TableRowStyled>
//       <TableCell>
//         <DetailsContainer>
//           <InfoIcon className="fas fa-info-circle"></InfoIcon>
//           <span>{details}</span>
//         </DetailsContainer>
//       </TableCell>
//       <TableCell>{additionalFeatures}</TableCell>
//       <TableCell>
//         {support ? <CheckIcon className="fas fa-check-circle"></CheckIcon> : 'No'}
//       </TableCell>
//       <TableCell>{price}</TableCell>
//       <TableCell>
//         <SelectButton onClick={onSelect}>Select Plan</SelectButton>
//       </TableCell>
//     </TableRowStyled>
//   );
// }

// export default TableRow;
