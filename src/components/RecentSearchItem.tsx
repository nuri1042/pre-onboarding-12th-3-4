import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { styled } from 'styled-components';

type RecentSearchItemProps = {
  children: React.ReactNode;
};

export default function RecentSearchItem({ children }: RecentSearchItemProps) {
  return (
    <StyledItem type='button'>
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
