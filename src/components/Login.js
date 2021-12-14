
import styled from "styled-components"
import { Girl } from "../assets"
import LoginForm from "./LoginForm"
import Container  from "../Global/Container"


const LoginContainer = styled.div`
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
        height: 400px;
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
function Login(){
    return(
        <Container>
            <LoginContainer>
                <RightSide>
                    <div className="flex-container">
                        <h2>Login</h2>
                        <p>Access your Agroan account for a quick loan.</p>
                    </div>
                    <LoginForm/>
                    <div className="flex-container">
                        <button className="btn-login">Login</button>
                    </div>
                </RightSide>

                <LeftSide>
                    <img src={Girl} alt="girl"/>
                </LeftSide>
            </LoginContainer>
        </Container>
    )
}

export default Login