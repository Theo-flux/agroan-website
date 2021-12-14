import { Link } from "react-router-dom"
import styled from "styled-components"
import { Fog } from "../assets"
import Container  from "../Global/Container"
import PersonalForm from "./PersonalInfo"



const DetailsContainer = styled.div`
    margin: 10em auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    
    

    @media (min-width: 960px){
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        height: 500px;
        max-width: 700px;
        box-shadow: 10px 10px 40px rgba(192, 197, 233, 0.6);
        border-radius: 10px;
    }
    
`

const RightSide = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1em;

    .flex-container {
        h2,p{
            margin: 0;
        }

        h2 {
            font-size: 1.5rem;
            font-weight: 800;
        }

        p {
            font-size: .8rem;
        }
    }

    .flex-container:last-of-type {
        width: 50%;
        align-self: flex-end;
        
    }

    .btn-login {
        display: flex;
        justify-content: flex-end;
        color: var(--White);
        font-weight: 500;
        width: 100%;
        padding: .8em;
        border-radius: 5px;
        border: none;
        background: linear-gradient(250.79deg, #2B9B88 -4.87%, #045648 152.64%);
        box-shadow: 0px 7px 9px rgba(10, 82, 70, 0.16);

        i {
            padding-left: .5em;
            font-size: 1.5rem;
        }

        p {
            width: 50%;
            font-size: 1.2rem;
        }
    }

    @media (min-width:960px){

        width: 40%;
        padding: 1em;

        .flex-container:last-of-type {
            
        } 
    }

`
const   LeftSide = styled.div`
    position: relative;    
    z-index: -1;

    img {
        width: 100%;
        min-height: 100%;
        object-fit: cover;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    @media (max-width: 959px){
        display: none
    }

    @media (min-width: 960px){
        width: 50%;
        height: 100%;
    }
`
function Details(){
    return(
        <Container>
            <DetailsContainer>
                <RightSide>
                    <div className="flex-container">
                        <h2>Personal Details</h2>
                        <p>Complete this form to qualify for a quick loan.</p>
                    </div>
                    <PersonalForm/>
                    <div className="flex-container">
                        <Link style={{textDecoration: "none"}} to='/bank'>
                            <button className="btn-login"><p>Next</p> <i className="ri-arrow-right-s-line"></i></button>
                        </Link>
                    </div>
                </RightSide>

                <LeftSide>
                    <img src={ Fog } alt="fog"/>
                </LeftSide>
            </DetailsContainer>
        </Container>
    )
}



export default Details