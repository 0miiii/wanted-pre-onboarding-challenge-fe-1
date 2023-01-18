import React from "react";
import Container from "./GlobalLayout.style";
import Header from "../../components/templates/Header/Header";

type Props = {
  children: React.ReactNode;
};

const GlobalLayout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default GlobalLayout;
