// src/components/Page1.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar2 from './Sidebar2';
import Table2 from './Table2';

import { hotel3to5StarsData, hotelApartmentsData, hostelsData, specialPlansData } from './DataByCategory';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f9fafb;
  font-family: 'lateef';
  
`;

const MainContent = styled.div`
  display: flex;
  flex-grow: 1;
`;

const SidebarContainer = styled.div`
  width: 25%;
`;

const TableContainer = styled.div`
  flex-grow: 1;
  padding: 1rem;
`;

const categoriesDataMap = {
  'Hotel 3 to 5 Stars': hotel3to5StarsData,
  'Hotel Apartments': hotelApartmentsData,
  'Hostels': hostelsData,
  'Special Plans': specialPlansData,
};

const Page1 = () => {
  const [selectedCategory, setSelectedCategory] = useState('Hotel 3 to 5 Stars');

  return (
    <PageContainer>
      <MainContent>
        <TableContainer>
          <Table2 data={categoriesDataMap[selectedCategory]} />
        </TableContainer>
        <SidebarContainer>
          <Sidebar2 selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </SidebarContainer>
      </MainContent>
   </PageContainer>
  );
};

export default Page1;