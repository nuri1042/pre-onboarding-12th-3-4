import { styled } from 'styled-components';
import LocalStorage, { RECENT_SEARCH } from '../storage/localStorage';

export default function RecentSearchList() {
  const localStorage = new LocalStorage();
  const recentData = localStorage.get(RECENT_SEARCH);

  return (
    <StyledList>
      <li>최근 검색어</li>
      {!Array.isArray(recentData) ? (
        <li>최근 검색어가 없습니다.</li>
      ) : (
        recentData.map((data: string, idx: number) => <li key={idx}>{data}</li>)
      )}
    </StyledList>
  );
}

const StyledList = styled.ul``;
