import React, { useState } from "react";
import { Button, Container, Input, InputContent, Label, RadioGroup } from "./style";

const Form = () => {
  const [desc, setDesc] = useState("");

  return (
    <Container>
      <InputContent>
        <Label>
          <Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </Label>
      </InputContent>
    </Container>
  );
};

export default Form;