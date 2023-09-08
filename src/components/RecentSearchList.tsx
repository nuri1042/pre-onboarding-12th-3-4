import { styled } from 'styled-components';
import LocalStorage, { RECENT_SEARCH } from '../storage/localStorage';
import RecentSearchItem from './RecentSearchItem';

export default function RecentSearchList() {
  const localStorage = new LocalStorage();
  const recentData = localStorage.get(RECENT_SEARCH);

  return (
    <StyledList>
      <li>최근 검색어</li>
      {!Array.isArray(recentData) ? (
        <li>최근 검색어가 없습니다.</li>
      ) : (
        recentData.map((data: string, idx: number) => (
          <li key={idx}>
            <RecentSearchItem>{data}</RecentSearchItem>
          </li>
        ))
      )}
    </StyledList>
  );
}

const StyledList = styled.ul``;
