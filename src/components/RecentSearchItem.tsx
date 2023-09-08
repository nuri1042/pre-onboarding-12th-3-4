import { FaSearch } from 'react-icons/fa';
import { styled } from 'styled-components';
import React from 'react';

type RecentSearchItemProps = {
  children: React.ReactNode;
};

export default function RecentSearchItem({ children }: RecentSearchItemProps) {
  return (
    <StyledItem type='button'>
      <FaSearch size='12' color='white' />
      <span>{children}</span>
    </StyledItem>
  );
}

const StyledItem = styled.button``;
