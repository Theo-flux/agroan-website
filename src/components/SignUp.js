import { Link } from "react-router-dom"
import styled from "styled-components"
import { Girl } from "../assets"
import SignupForm from "./SignupForm"
import Container  from "../Global/Container"


const SignupContainer = styled.div`
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
            font-size: .875rem;
        }
    }

    .flex-container:last-of-type {
        width: 100%;
        
    }

    .btn-login {
        color: var(--White);
        font-weight: 500;
        font-size: 1rem;
        width: 100%;
        padding: 1em;
        border-radius: 5px;
        border: none;
        background: linear-gradient(250.79deg, #2B9B88 -4.87%, #045648 152.64%);
        box-shadow: 0px 7px 9px rgba(10, 82, 70, 0.16);
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

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left:0;
        width: 100%;
        height:100%;
        z-index: 1;
        background: rgba(2, 149, 116, 0.48);
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

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: .9rem;
    color: var(--Black);

    strong:hover {
        text-decoration: underline;
        color: var(--Shade3);
    }
`

const StyledButton = styled(Link)`
    display: flex;
    justify-content: center;
    // border: 1px solid magenta;
    text-decoration: none;
    color: var(--White);
    font-weight: 500;
    font-size: 1rem;
    text-align: center;
    width: 90%;
    padding: .8rem;
    border-radius: 5px;
    border: none;
    background: linear-gradient(250.79deg, #2B9B88 -4.87%, #045648 152.64%);
    box-shadow: 0px 7px 9px rgba(10, 82, 70, 0.16);
`

function SignUp(){
    return(
        <Container>
            <SignupContainer>
                <RightSide>
                    <div className="flex-container">
                        <h2>Create Account</h2>
                        <p>Create your Agroan account for a quick loan.</p>
                    </div>
                    <SignupForm/>
                    <div className="flex-container">
                        <StyledButton to='/applynow'>Sign up</StyledButton>
                    </div>

                    <StyledLink to='/Login'>Have an account? <strong>Login</strong></StyledLink>
                </RightSide>

                <LeftSide>
                    <img src={Girl} alt="girl"/>
                </LeftSide>
            </SignupContainer>
        </Container>
    )
}

export default SignUp