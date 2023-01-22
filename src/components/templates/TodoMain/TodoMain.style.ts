import styled from "styled-components";

export const Container = styled.section`
  width: 40%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const ListContainer = styled.li`
  padding: 10px;
  margin: 5px 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: blanchedalmond;
  }
`;
