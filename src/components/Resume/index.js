import React from "react";
import ResumeItem from "../ResumeItem";
import { Container } from "./style";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = () => {
  return (
    <Container>
      <ResumeItem icon={FaRegArrowAltCircleUp} />
      <ResumeItem />
      <ResumeItem />
    </Container>
  );
};

export default Resume;