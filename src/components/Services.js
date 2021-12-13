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
                <h2>Your loan could be approved and available to you in three easy steps: </h2>
                <ServiceFlex>
                    <ServiceCard title="Create an account"/>
                    <ServiceCard bordered title="Fill the form (application)"/>
                    <ServiceCard title="Verify your financial credit history"/>
                </ServiceFlex>
            </Container>
        </ServiceContainer>
    )
}

export default Services