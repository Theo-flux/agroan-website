import styled from "styled-components";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Details from "./components/Details";
import Bank from "./components/Bank";

const AppContainer = styled.div`
  position: relative;
`

function App() {
  return (
    <AppContainer>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<>
            <Hero/>
            <Services/>
            <About/>
            <Footer/>
          </>
        }/>

        <Route exact path='/applynow' element={<Details/>}/>
        <Route exact path='/bank' element={<Bank/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Sign-up' element={<SignUp/>}/>
      </Routes>
      
    </AppContainer>
  );
}

export default App;
