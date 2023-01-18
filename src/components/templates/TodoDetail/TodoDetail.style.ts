import styled from "styled-components";

const Container = styled.div`
  border: 1px solid green;
  width: 50%;
  padding: 10px;

  & > h1 {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid red;
    border-radius: 5px;
  }

  & > p {
    padding: 10px;
    height: 200px;
    border: 1px solid red;
    border-radius: 5px;
  }
`;

export default Container;
