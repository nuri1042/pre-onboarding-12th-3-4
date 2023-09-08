import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { styled } from 'styled-components';
import { useSearch } from '../context/SearchContext';

export default function SearchForm() {
  const { searchText, inputChange, keyboardEvent } = useSearch();

  const searchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={searchSubmit}>
      <input type='text' name='sick' value={searchText} onChange={inputChange} onKeyDown={keyboardEvent} autoFocus />
      <button type='submit' className='submit-btn'>
        <FaSearch size='24' color='white' />
      </button>
    </Form>
  );
}

const StyledForm = styled.form``;
const Form = styled.form`
  background-color: white;
  border-radius: 3rem;
  width: 100%;
  padding: 10px 15px;
  max-width: 490px;
  display: flex;

  &:focus-within {
    outline: 2px solid var(--primary);
    input {
      &::placeholder {
        opacity: 0;
      }
    }
  }

  input {
    width: 90%;
    border: none;
    font-size: 20px;
    padding-left: 5px;

    &:focus-visible {
      border: none;
      outline: none;
    }
  }

  input::-webkit-input-placeholder {
    background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png);
    background-size: contain;
    background-position: 0 center;
    background-repeat: no-repeat;
    text-indent: 0;
    padding-left: 35px;
  }
  .submit-btn {
    background-color: var(--primary);
    border-radius: 100%;
    display: inline-block;
    text-align: center;
    width: 48px !important;
    height: 48px;
    svg {
      width: 21px;
      height: 21px;
    }
  }
`;
