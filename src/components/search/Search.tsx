import styled from 'styled-components';
import SearchForm from './SearchForm';
import SearchList from './SearchList';
import { useSearch } from '../../context/SearchContext';
import useClickOutside from '../../hooks/useClickOutside';
import { useRef } from 'react';

function Search() {
  const { isFocus, changeFocus } = useSearch();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useClickOutside(inputRef, () => changeFocus(false));

  return (
    <SearchWrap>
      <h1>
        국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기{' '}
      </h1>
      <div className='search-wrap'>
        <SearchForm ref={inputRef} />
        {isFocus && <SearchList />}
      </div>
    </SearchWrap>
  );
}

export default Search;
const SearchWrap = styled.div`
  background-color: #cae9ff;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 100px 20px;
  h1 {
    font-size: 18px;
    text-align: center;
  }
  .search-wrap {
    position: relative;
    width: 100%;
    max-width: 490px;
  }
`;
