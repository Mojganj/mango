import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  padding: 1rem;
  background-color: #f3f4f6;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Category = styled.div`
  padding: 0.5rem;
  border-radius: 0.375rem;
  background-color: ${({ selected }) => (selected ? '#fbbf24' : 'transparent')};
  color: ${({ selected }) => (selected ? '#ffffff' : '#000000')};
  cursor: pointer;

  &:hover {
    background-color: #fbbf24;
    color: #ffffff;
  }
`;

const categories = [
  'Hotel 3 to 5 Stars',
  'Hotel Apartments',
  'Hostels',
  'Special Plans'
];

function Sidebar2({ selectedCategory, setSelectedCategory }) {
  return (
    <SidebarContainer>
      <CategoriesContainer>
        {categories.map((category) => (
          <Category
            key={category}
            selected={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Category>
        ))}
      </CategoriesContainer>
    </SidebarContainer>
  );
}

export default Sidebar2;
