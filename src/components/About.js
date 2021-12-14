import { Poultry, Pig, Tractor, Fruit } from "../assets"
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
                <AboutCard title='Poultry' image={Poultry}/>
                <AboutCard title='Piggery' reverse image={Pig}/>
                <AboutCard title='Fruit Farming' image={Fruit}/>
            </AboutContainer>
        </Container>
    )
}

export default About

