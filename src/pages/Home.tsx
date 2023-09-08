import SearchForm from '../components/SearchForm';
import SearchList from '../components/SearchList';
import { styled } from 'styled-components';
import { useRef } from 'react';
import { useSearch } from '../context/SearchContext';
import useClickOutside from '../hooks/useClickOutside';

export default function Home() {
  const { isFocus, changeFocus } = useSearch();
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  useClickOutside(searchInputRef, () => changeFocus(false));

  return (
    <StyledLayout>
      <h1>
        국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기{' '}
      </h1>
      <SearchForm ref={searchInputRef} />
      {isFocus && <SearchList />}
    </StyledLayout>
  );
}

const StyledLayout = styled.div``;
