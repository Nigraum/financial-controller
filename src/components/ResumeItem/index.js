import React from "react";
import { Container, HeaderTitle, THeader, Total } from "./style";

const ResumeItem = ({ title, Icon, value }) => {
  return (
    <Container>
      <THeader>
        <HeaderTitle>
          {title}
        </HeaderTitle>
        <Icon />
      </THeader>
      <Total>{value}</Total>
    </Container>
  );
};

export default ResumeItem;