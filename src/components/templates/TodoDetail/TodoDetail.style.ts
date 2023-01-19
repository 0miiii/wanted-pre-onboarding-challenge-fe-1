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

  & > form > input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-width: 1px;
    border-radius: 5px;
  }

  & > form > textarea {
    resize: none;
    width: 100%;
    height: 200px;
    padding: 10px;
    border-radius: 5px;
  }
`;

export default Container;
