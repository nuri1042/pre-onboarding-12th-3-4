import React, { forwardRef } from 'react';
import { styled } from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useSearch } from '../context/SearchContext';
import LocalStorage, { RECENT_SEARCH } from '../storage/localStorage';

interface Props {
  ref?: React.MutableRefObject<HTMLInputElement | null>;
}

const SearchForm = forwardRef<HTMLInputElement, Props>(({ ...props }, ref) => {
  const { searchText, changeSearchText, inputChange, changeFocus } = useSearch();

  const searchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const localStorage = new LocalStorage();
    localStorage.save(RECENT_SEARCH, searchText);
    changeSearchText('');
  };

  return (
    <StyledForm onSubmit={searchSubmit}>
      <label>
        <input
          type='text'
          name='sick'
          value={searchText}
          onChange={inputChange}
          autoFocus
          onFocus={() => changeFocus(true)}
          ref={ref}
        />
        <FaSearch size='24' color='white' />
      </label>
      <button type='submit'>검색</button>
    </StyledForm>
  );
});

export default SearchForm;

const StyledForm = styled.form``;
