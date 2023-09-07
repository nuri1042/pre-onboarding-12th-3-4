import SearchForm from '../components/SearchForm';
import SearchList from '../components/SearchList';
import { styled } from 'styled-components';
import SearchProvider from '../context/SearchProvider';

export default function Home() {
  return (
    <StyledLayout>
      <h1>
        국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기{' '}
      </h1>
      <SearchProvider>
        <SearchForm />
        <SearchList />
      </SearchProvider>
    </StyledLayout>
  );
}

const StyledLayout = styled.div``;
