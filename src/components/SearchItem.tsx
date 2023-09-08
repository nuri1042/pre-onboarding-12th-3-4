import React, { useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { styled } from 'styled-components';
import { useSearch } from '../context/SearchContext';

type SelectItemProps = {
  children: React.ReactNode;
};

export default function SelectItem({ children }: SelectItemProps) {
  const { handleSuggestionClick } = useSearch();

  return (
    <StyledItem type='button' onClick={() => handleSuggestionClick}>
      <FaSearch size='12' color='gray' />
      <span>{children}</span>
    </StyledItem>
  );
}

const StyledItem = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
`;
