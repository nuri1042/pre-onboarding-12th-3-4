import { styled } from 'styled-components';
import Search from '../components/search/Search';
import Header from '../components/common/Header';

export default function Home() {
  return (
    <StyledLayout>
      <Header />
      <Search />
      <div>
        <h3>바로 참여 가능한 임상시험</h3>
      </div>
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
`;
