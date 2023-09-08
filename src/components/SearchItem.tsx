import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { styled } from 'styled-components';

type SelectItemProps = {
  children: React.ReactNode;
};

export default function SelectItem({ children }: SelectItemProps) {
  return (
    <StyledItem type='button'>
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
