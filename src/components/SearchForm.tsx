import React from 'react';
import { styled } from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useSearch } from '../context/SearchContext';

export default function SearchForm() {
  const { searchText, inputChange } = useSearch();

  const searchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <StyledForm onSubmit={searchSubmit}>
      <label>
        <input type='text' name='sick' value={searchText} onChange={inputChange} autoFocus />
        <FaSearch size='24' color='white' />
      </label>
      <button type='submit'>검색</button>
    </StyledForm>
  );
}

const StyledForm = styled.form``;
