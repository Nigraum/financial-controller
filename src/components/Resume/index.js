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
      <ResumeItem title="Entradas" value="1000" Icon={FaRegArrowAltCircleUp} />
      <ResumeItem title="Saídas" value="1000" Icon={FaRegArrowAltCircleDown} />
      <ResumeItem title="Total" value="1000" Icon={FaDollarSign} />
    </Container>
  );
};

export default Resume;