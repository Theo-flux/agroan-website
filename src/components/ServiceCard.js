import styled from "styled-components"

const ServiceCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5em;
    border-radius: 8px;
    border: ${props => props.bordered ? "2px solid var(--Shade3)": "none"};
    transition: .4s all ease-in;

    &:hover {
        border: 2px solid var(--Shade3);
        box-shadow: 0px 8px 36px rgba(0, 0, 0, 0.16);
    }
    
    

    i {
        font-size: 2.8rem;
        color: var(--Shade1);
    }

    p {
        margin: 0;
        text-align: center;
        width: 90%;
        font-weight: 400;
    }

    .title {
        color: var(--Shade1);
        width: 100px;
        font-weight: 800;
    }
`

function ServiceCard(props){
    return (
        <ServiceCardContainer {...props}>
            <i className="ri-alarm-warning-fill"></i>
            <p className="title">Lorem Ipsum dolor</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien commodo aliquam quis </p>
        </ServiceCardContainer>
    )
}

export default ServiceCard