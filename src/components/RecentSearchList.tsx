import { styled } from 'styled-components';
import LocalStorage, { RECENT_SEARCH } from '../storage/localStorage';
import RecentSearchItem from './RecentSearchItem';

export default function RecentSearchList() {
  const localStorage = new LocalStorage();
  const recentData = localStorage.get(RECENT_SEARCH);

  return (
    <StyledList>
      <span>최근 검색어 : </span>
      {!Array.isArray(recentData) ? (
        <span>최근 검색어가 없습니다.</span>
      ) : (
        <ul>
          {recentData.map((data: string, idx: number) => (
            <li key={idx}>
              <RecentSearchItem>{data}</RecentSearchItem>
            </li>
          ))}
        </ul>
      )}
    </StyledList>
  );
}

const StyledList = styled.div`
  padding: 0 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  > span {
    font-size: small;
    color: #cecece;
  }
  ul {
    display: inline-flex;
    gap: 5px;
    li {
      padding: 0;
    }
  }
`;
