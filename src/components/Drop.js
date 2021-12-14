import { Link } from "react-router-dom"
import styled from "styled-components"
import Button from "./Button"


const DropContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    aligh-items: center;
    gap: 1em;
    background-color: white;
    border-radius: 8px;
    padding: 2em;
    box-shadow: 0px 8px 36px rgba(0, 0, 0, 0.16);

    .bottom {
        margin-top: 1em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        aligh-items: center;
        gap: .5em;
    }

    .btn {
        background: none;
        border: none;
        color: var(--Shade3);
        font-size: .875rem;
        font-weight: 400;
    }

    .btn:hover {
        text-decoration: underline;
    }
`

const Socials = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &>i {
        color: var(--Shade1); 
         
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    text-align: center;
    border-radius: 5px;
    border: ${props => props.primary ? "none":"1px solid var(--Shade3)"};
	box-shadow: 10px 10px 40px rgba(192, 197, 233, 0.6);
    background-color: ${props => props.primary ? "var(--Shade3)":"var(--White)"};
	color: ${props => props.primary ? "white":"var(--Shade3)"};
`
function Drop({handleDrop}){
    return(
        <DropContainer>
            <StyledLink to='/Login' onClick={() => handleDrop()}>
                Login
            </StyledLink>

            <StyledLink primary to='/Sign-Up' onClick={() => handleDrop()}>
                Sign Up
            </StyledLink>
            
            <div className="bottom">
                <button className="btn">Contact Us</button>
                <Socials>
                    <i className="ri-youtube-fill"></i>
                    <i className="ri-instagram-fill"></i>
                    <i className="ri-twitter-fill"></i>
                    <i className="ri-facebook-box-fill"></i>
                </Socials>
            </div>
        </DropContainer>
    )
}

export default Drop

