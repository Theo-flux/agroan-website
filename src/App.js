import styled from "styled-components";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

const AppContainer = styled.div`
  position: relative;
`

function App() {
  return (
    <AppContainer>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Footer/>
    </AppContainer>
  );
}

export default App;
