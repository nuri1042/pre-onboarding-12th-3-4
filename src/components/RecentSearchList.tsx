import { styled } from 'styled-components';
import LocalStorage, { RECENT_SEARCH } from '../storage/localStorage';
import RecentSearchItem from './RecentSearchItem';

export default function RecentSearchList() {
  const localStorage = new LocalStorage();
  const recentData = localStorage.get(RECENT_SEARCH);

  return (
    <StyledList>
      <span>최근 검색어 </span>
      {!Array.isArray(recentData) ? (
        <h3>최근 검색어가 없습니다.</h3>
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
  /* display: flex;
  align-items: center; */
  > span {
    display: block;
    font-size: small;
    color: #888888;
  }
  h3 {
    font-size: 16px;
    padding: 5px 0;
    color: #b4b4b4;
  }
  ul {
    padding: 10px 0;
    display: flex;
    gap: 5px;
  }
`;
