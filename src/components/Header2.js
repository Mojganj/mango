// Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem; // Equivalent to p-4
  background-color: #ffffff; // Equivalent to bg-white
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Equivalent to shadow-md
`;

const Logo = styled.div`
  /* Insert logo styles here if needed */
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; // Equivalent to space-x-4
`;

const SearchInput = styled.input`
  border: 1px solid #d1d5db; // Equivalent to border
  border-radius: 0.375rem; // Equivalent to rounded
  padding: 0.5rem; // Equivalent to p-2
`;

const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserProfileImage = styled.img`
  height: 2.5rem; // Equivalent to h-10
  width: 2.5rem; // Equivalent to w-10
  border-radius: 50%; // Equivalent to rounded-full
`;

const UserName = styled.span`
  margin-left: 0.5rem; // Equivalent to ml-2
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>
        {/* Insert logo here */}
      </Logo>
      <ProfileContainer>
        <SearchInput type="text" placeholder="Search..." />
        <UserProfileContainer>
          <UserProfileImage src="https://placehold.co/40x40" alt="User Profile" />
          <UserName>John Doe</UserName>
        </UserProfileContainer>
      </ProfileContainer>
    </HeaderContainer>
  );
}

export default Header;























// // Header.js
// import React from 'react';

// function Header() {
//   return (
//     <header className="header flex items-center justify-between p-4 bg-white shadow-md">
//       <div className="logo">
//         {/* Insert logo here */}
//       </div>
//       <div className="profile flex items-center space-x-4">
//         <input className="border rounded p-2" type="text" placeholder="Search..." />
//         <div className="user-profile flex items-center">
//           <img className="h-10 w-10 rounded-full" src="https://placehold.co/40x40" alt="User Profile" />
//           <span className="ml-2">John Doe</span>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;
