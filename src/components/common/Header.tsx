import styled from 'styled-components';

function Header() {
  return (
    <Styles>
      <h3>한국 임상시험</h3>
      <div>
        <button>menu1</button>
        <button>menu1</button>
        <button>menu1</button>
      </div>
    </Styles>
  );
}

export default Header;

const Styles = styled.header`
  height: 50px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
