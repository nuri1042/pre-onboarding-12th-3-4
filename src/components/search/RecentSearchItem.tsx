import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { styled } from 'styled-components';
import { useSearch } from '../../context/SearchContext';

type RecentSearchItemProps = {
  children: React.ReactNode;
};

export default function RecentSearchItem({ children }: RecentSearchItemProps) {
  const { handleSuggestionClick } = useSearch();
  const handleRecentClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const keyword = (e.target as HTMLElement).textContent;
    if (keyword) {
      handleSuggestionClick(keyword);
    }
  };
  return (
    <StyledItem type='button' onClick={handleRecentClick}>
      <FaSearch />
      <span>{children}</span>
    </StyledItem>
  );
}

const StyledItem = styled.button`
  color: var(--primary);
  font-size: 12px;
  svg {
    color: var(--primary);
  }
  border: solid 1px var(--primary);
  padding: 1px 5px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
`;
