// Sidebar.js
import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  width: 25%; // Equivalent to w-1/4
  padding: 1rem; // Equivalent to p-4
  background-color: #f3f4f6; // Equivalent to bg-gray-100
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Equivalent to shadow-md
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; // Equivalent to space-y-4
`;

const Category = styled.div`
  padding: 0.5rem; // Equivalent to p-2
  border-radius: 0.375rem; // Equivalent to rounded-md

  &:nth-child(1) {
    background-color: #fbbf24; // Equivalent to bg-yellow-500
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <CategoriesContainer>
        <Category>Hotel 3 to 5 Stars</Category>
        <Category>Hotel Apartments</Category>
        <Category>Hostels</Category>
        <Category>Special Plans</Category>
      </CategoriesContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
