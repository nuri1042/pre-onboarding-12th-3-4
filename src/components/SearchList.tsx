import { useSearch } from '../context/SearchContext';
import SelectItem from './SearchItem';
import { styled } from 'styled-components';
import { isEmpty } from '../lib/utils';

const SEARCH_LIMIT = 10;

export default function SelectList() {
  const { suggestions, searchText } = useSearch();
  return (
    <StyledList>
      <li>
        {isEmpty(searchText) && '검색어 없음'}
        {!isEmpty(searchText) && isEmpty(suggestions) && '추천 검색어 없음'}
        {!isEmpty(searchText) && !isEmpty(suggestions) && '추천 검색어'}
      </li>
      {!isEmpty(searchText) &&
        suggestions.slice(0, SEARCH_LIMIT).map((sick) => {
          return (
            <li key={sick.sickCd}>
              <SelectItem>{sick.sickNm}</SelectItem>
            </li>
          );
        })}
    </StyledList>
  );
}

const StyledList = styled.ul``;
