import { useSearch } from '../context/SearchContext';
import SelectItem from './SearchItem';
import { styled } from 'styled-components';
import { isEmpty } from '../lib/utils';

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
        suggestions.map((sick) => {
          return (
            <li key={sick.sickCd}>
              <SelectItem>{sick.sickNm}</SelectItem>
              {searchText === sick.sickNm && '같은 이름, 선택됨'}
            </li>
          );
        })}
    </StyledList>
  );
}

const StyledList = styled.ul``;
