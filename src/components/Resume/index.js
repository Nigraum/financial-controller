import React from "react";
import ResumeItem from "../ResumeItem";
import { Container } from "./style";

const Resume = () => {
  return (
    <Container>
      <ResumeItem />
      <ResumeItem />
      <ResumeItem />
    </Container>
  );
};

export default Resume;