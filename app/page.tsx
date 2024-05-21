'use client';
import React, { useState } from 'react';
import './globals.css';
import styled from 'styled-components';

// Styled components for the dark theme and center alignment
const DarkThemePage = styled.div`
  background-color: #121212; // Dark background color
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SearchBar = styled.input`
  width: 50%; // Big search bar
  padding: 15px;
  margin: 20px 0;
  font-size: 20px;
  border-radius: 25px;
  border: none;
  outline: none;
  text-align: center; // Text aligned to center
`;

const CenteredText = styled.p`
  color: #ffffff;
  text-align: center; // Text aligned to center
`;

// Page component
const Page = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <DarkThemePage>
      <CenteredText></CenteredText>
      <SearchBar
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Ask Anything..."
      />
    </DarkThemePage>
  );
};

export default Page;
