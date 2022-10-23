import React, { useState } from "react";
import { Button, Container, Input, InputContent, Label, RadioGroup } from "./style";

const Form = () => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  return (
    <Container>
      <InputContent>
        <Label>Descrição</Label>
          <Input value={desc} onChange={(e) => setDesc(e.target.value)} />
      </InputContent>
      <InputContent>
        <Label>Valor</Label>
        <Input 
          value={amount} 
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        />
      </InputContent>
      <RadioGroup>
        <Input
          type="radio"
          id="rIncome"
          defaultChecked
          name="group1"
        />
        <Input
          type="radio"

        />
      </RadioGroup>
    </Container>
  );
};

export default Form;