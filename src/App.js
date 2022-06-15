import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Container } from "./styles";

function App() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>

  );
}

export default App;
