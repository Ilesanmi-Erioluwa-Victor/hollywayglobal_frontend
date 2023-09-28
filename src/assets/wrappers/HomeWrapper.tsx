import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: [container-start] repeat(
      12,
      minmax(min-content, 12.5rem)
    );
  justify-content: center;
`;
export default Wrapper;
