import styled from "styled-components";

export const FormContainer = styled.form`
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  > h1 {
    text-align: center;
  }
`;

export const BtnContainer = styled.div`
  text-align: right;
`;

export const InputContainer = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  > input,
  textarea {
    padding: 5px;
    border: 1px solid antiquewhite;
    border-radius: 5px;
    margin: 5px 0;
  }

  > textarea {
    resize: none;
    height: 70px;
  }

  > input:focus,
  textarea:focus {
    outline: none;
    border: 1px solid palevioletred;
  }
`;
