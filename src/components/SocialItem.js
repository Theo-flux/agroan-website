import styled from "styled-components"

const SocialContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;

    i {
        color: var(--Shade3);
        font-size: 1.5rem;
        cursor: pointer;
    }


    @media (min-width: 767px){
        width: 20%;

        i {
            color: var(--White);  
        }

        i:hover,
        i:focused {
            color: var(--White);
        }
    }
    
`

function SocialItem(){
    return(
        <SocialContainer>
            <i className="ri-youtube-fill"></i>
            <i className="ri-instagram-fill"></i>
            <i className="ri-twitter-fill"></i>
            <i className="ri-facebook-box-fill"></i>
        </SocialContainer>
    )
}

export default SocialItem