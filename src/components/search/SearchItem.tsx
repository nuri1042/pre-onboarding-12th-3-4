import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { styled } from 'styled-components';
import { useSearch } from '../../context/SearchContext';
import { Sick } from '../../types';

type SelectItemProps = {
  sick: Sick;
};

export default function SelectItem({ sick }: SelectItemProps) {
  const { handleSuggestionClick } = useSearch();

  return (
    <StyledItem type='button' onClick={() => handleSuggestionClick(sick.sickNm)}>
      <FaSearch size='12' color='gray' />
      <p>{sick.sickNm}</p>
    </StyledItem>
  );
}

const StyledItem = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
