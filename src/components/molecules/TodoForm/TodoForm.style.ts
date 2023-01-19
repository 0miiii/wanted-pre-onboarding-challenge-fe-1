import styled from "styled-components";

export const Container = styled.form`
  border: 1px solid green;
`;

export const InputContainer = styled.div`
  background-color: antiquewhite;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  & > label {
    width: 60px;
  }

  & > input {
    flex-grow: 1;
  }

  & > textarea {
    resize: none;
    flex-grow: 1;
    height: 70px;
  }
`;
