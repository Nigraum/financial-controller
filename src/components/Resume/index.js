import React from "react";
import ResumeItem from "../ResumeItem";
import { Container } from "./style";
import { 
  FaDollarSign, 
  FaRegArrowAltCircleDown, 
  FaRegArrowAltCircleUp 
} from "react-icons/fa";

const Resume = () => {
  return (
    <Container>
      <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} />
      <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} />
      <ResumeItem title="Total" Icon={FaDollarSign} />
    </Container>
  );
};

export default Resume;