import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { styled } from 'styled-components';

type SelectItemProps = {
  children: React.ReactNode;
};

export default function SelectItem({ children }: SelectItemProps) {
  return (
    <StyledItem type='button'>
      <FaSearch size='12' color='white' />
      <span>{children}</span>
    </StyledItem>
  );
}

const StyledItem = styled.button``;
