import { Poultry, Pig, Tractor } from "../assets"
import styled from "styled-components"
import Container from "../Global/Container"
import AboutCard from "./AboutCard"

const AboutContainer = styled.div`
    padding: 5em 0;
    display: flex; 
    flex-direction: column;
    gap: 4em;

   
`

function About(){
    return(
        <Container>
            <AboutContainer>
                <AboutCard image={Pig}/>
                <AboutCard reverse image={Poultry}/>
                <AboutCard image={Tractor}/>
            </AboutContainer>
        </Container>
    )
}

export default About

