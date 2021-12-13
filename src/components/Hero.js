import { HeroImage } from '../assets'
import styled from 'styled-components' 
import Container from '../Global/Container'
import CTA from './CTA'

const HeroContainer = styled.main`
    background: url(${HeroImage}) rgba(0, 0, 0, 0.33) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-blend-mode: multiply;
    width: 100%;
    height: 100vh; 

`
const HeroContent  = styled.div`
    color: var(--White);
    padding-top: 12em;
    margin: 0 auto;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;

    h1,p{
        margin: 0;
        text-align: center; 
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 800;
        line-height: 1.2;
    }

    p {
        font-size: .9rem;
    }


    @media (min-width: 767px){

        h1 {
            font-size: 4rem;
        }

        p {
            font-size: 1.2rem;
        }
    }
`
function Hero(){
    return(
        <HeroContainer>
             <Container>

                <HeroContent>
                        <h1>Agricultural Business Loans</h1>
                        <p>
                            Agroan uses modern-day technologies to help you 
                            secure the concessional funding needed to expand 
                            your agro-business.
                        </p>
                        <CTA/>
                </HeroContent>
            </Container>
        </HeroContainer>
    )
}

export default Hero