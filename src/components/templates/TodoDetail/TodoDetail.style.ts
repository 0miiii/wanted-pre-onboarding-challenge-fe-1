import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  & > h1 {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid antiquewhite;
  }

  & > p {
    padding: 10px;
    height: 200px;
    border-radius: 5px;
    border: 1px solid antiquewhite;
  }

  & > form > input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid antiquewhite;
    border-radius: 5px;
  }

  & > form > textarea {
    resize: none;
    height: 200px;
  }

  & > form > input:focus,
  textarea:focus {
    outline: none;
    border: 1px solid palevioletred;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: right;
  gap: 5px;
`;
