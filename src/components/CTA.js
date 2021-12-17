import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledLink = styled(Link)`
    margin-top: 2em;
    width: 50%;
    padding: 1em;
    background: linear-gradient(250.79deg, #2B9B88 -4.87%, #045648 152.64%);
    box-shadow: 0px 7px 9px rgba(10, 82, 70, 0.16);
    border-radius: 5px;
    border: none;
    transition: .4s all ease-in;
    text-align: center;
    text-decoration: none;
    font-weight: 800;
    color: var(--White);
    font-size: 1rem;

    &:hover {
        background: none;
        outline: 2px solid var(--White);  
        color: var(--White);
    }
`

function CTA(){
    return(
        
        <StyledLink to='/Login'>
            Apply Now
        </StyledLink>
        
    )
}


export default CTA