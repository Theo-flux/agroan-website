import styled from "styled-components"
import { Leaves } from "../assets"
import Container from "../Global/Container"
import ServiceCard from './ServiceCard'

const ServiceContainer = styled.section`

    padding: 2em 0;

    h2 {
        padding-bottom: 2em;
        text-align: center;
        font-size: 1.5rem;
    }
`

const ServiceFlex = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;

    @media (min-width: 767px){
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`

function Services({}){
    return(
        <ServiceContainer>
            <Container>
                <h2>Lorem ipsum dolor sit amet, consectetur </h2>
                <ServiceFlex>
                    <ServiceCard/>
                    <ServiceCard bordered/>
                    <ServiceCard/>
                </ServiceFlex>
            </Container>
        </ServiceContainer>
    )
}

export default Services