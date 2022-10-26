import React from "react";
import ResumeItem from "../ResumeItem";
import { Container } from "./style";
import { 
  FaDollarSign, 
  FaRegArrowAltCircleDown, 
  FaRegArrowAltCircleUp 
} from "react-icons/fa";

const Resume = ({ income, expense, total }) => {
  return (
    <Container>
      <ResumeItem title="Entradas" value={income} Icon={FaRegArrowAltCircleUp} />
      <ResumeItem title="Saídas" value={expense} Icon={FaRegArrowAltCircleDown} />
      <ResumeItem title="Total" value={total} Icon={FaDollarSign} />
    </Container>
  );
};

export default Resume;