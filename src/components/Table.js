// Table.js
import React from 'react';
import styled from 'styled-components';
import TableRow from './TableRow';

const TableStyled = styled.table`
  width: 100%;
  table-layout: auto;
`;

const TableHead = styled.thead`
  background-color: #e5e7eb;
`;

const TableHeaderRow = styled.tr``;

const TableHeaderCell = styled.th`
  padding: 0.5rem;
`;

const TableBody = styled.tbody``;

const rowData = [
  {
    details: 'Basic Plan',
    additionalFeatures: 'Feature 1, Feature 2',
    support: true,
    price: '1,000,000 Toman',
    onSelect: () => console.log('Basic Plan selected')
  },
  {
    details: 'Standard Plan',
    additionalFeatures: 'Feature 1, Feature 2, Feature 3',
    support: true,
    price: '2,000,000 Toman',
    onSelect: () => console.log('Standard Plan selected')
  },
  {
    details: 'Premium Plan',
    additionalFeatures: 'Feature 1, Feature 2, Feature 3, Feature 4',
    support: false,
    price: '3,000,000 Toman',
    onSelect: () => console.log('Premium Plan selected')
  },
  {
    details: 'Ultimate Plan',
    additionalFeatures: 'Feature 1, Feature 2, Feature 3, Feature 4, Feature 5',
    support: true,
    price: '4,000,000 Toman',
    onSelect: () => console.log('Ultimate Plan selected')
  }
];

function Table() {
  return (
    <TableStyled>
      <TableHead>
        <TableHeaderRow>
          <TableHeaderCell>Details</TableHeaderCell>
          <TableHeaderCell>Additional Features</TableHeaderCell>
          <TableHeaderCell>Support</TableHeaderCell>
          <TableHeaderCell>Price</TableHeaderCell>
          <TableHeaderCell>Plan</TableHeaderCell>
        </TableHeaderRow>
      </TableHead>
      <TableBody>
        {rowData.map((row, index) => (
          <TableRow
            key={index}
            details={row.details}
            additionalFeatures={row.additionalFeatures}
            support={row.support}
            price={row.price}
            onSelect={row.onSelect}
          />
        ))}
      </TableBody>
    </TableStyled>
  );
}

export default Table;
