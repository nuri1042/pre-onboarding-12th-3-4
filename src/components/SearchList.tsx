import { styled } from 'styled-components';
import { useSearch } from '../context/SearchContext';
import { isEmpty } from '../lib/utils';
import RecentSearchList from './RecentSearchList';
import SelectItem from './SearchItem';

export default function SelectList() {
  const { suggestions, searchText } = useSearch();

  return (
    <StyledList>
      <RecentSearchList />
      <hr />
      <span>
        {isEmpty(searchText) && '검색어 없음'}
        {!isEmpty(searchText) && isEmpty(suggestions) && '추천 검색어 없음'}
        {!isEmpty(searchText) && !isEmpty(suggestions) && '추천 검색어'}
      </span>

      <ul>
        {!isEmpty(searchText) &&
          suggestions.map((sick) => {
            return (
              <li key={sick.sickCd} className={searchText === sick.sickNm ? 'selected' : ''}>
                <SelectItem>{sick.sickNm}</SelectItem>
              </li>
            );
          })}
      </ul>
    </StyledList>
  );
}

const StyledList = styled.div`
  padding: 10px 0;
  min-height: 100px;
  position: absolute;
  top: 100px;
  background-color: white;
  border-radius: 1rem;
  width: 100%;
  overflow: auto;
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);

  > span {
    display: block;
    padding: 15px;
    padding-bottom: 5px;
    font-size: 12px;
    color: #535353;
  }
  > hr {
    border-top: 2px solid #d8d8d8;
  }
  > ul {
    max-height: 500px;
    overflow: auto;
    li {
      display: flex;
      align-items: center;
      gap: 10px;
      border-bottom: solid 1px #ececec;
      font-size: 15px;
      font-weight: 600;
      padding: 12px;
      width: 100%;
      text-align: left;
      overflow: hidden;
    }
    li:hover,
    .selected {
      background-color: #e6ecff;
    }
    svg {
      width: 20px;
      height: 20px;
      padding-top: 3px;
    }
  }
`;
