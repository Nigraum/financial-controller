import React from "react";
import GlobalStyle from "./assets/global";
import Form from "./components/Form";
import Header from "./components/Header";
import Resume from "./components/Resume";

const App = () => {
  return (
    <>
      <Header />
      <Resume />
      <Form />
      <GlobalStyle />
    </>
  );
};

export default App;