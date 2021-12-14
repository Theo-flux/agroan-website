import styled from "styled-components"

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        border-radius: 10px;
    }

    @media (min-width: 900px) {
        flex-direction: ${props => props.reverse ? "row-reverse" : "row"};
        justify-content: space-between;
        align-items: center;


        .image-container {
            width: 40%;
        }
        
    }
`

const TextArea = styled.div`
    h2, 
    p {
        text-align: center;
    }

    @media (min-width: 900px) {
        width: 40%; 

        h2, 
        p {
            text-align: left;
        }
        
    }
    
`

function AboutCard(props){
    return(
        <Card {...props}>
            <TextArea>
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sapien commodo aliquam quis enim Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Sapien commodo aliquam quis enim
                </p>
            </TextArea>

            <div className="image-container">
                <img src={props.image} alt='about' />
            </div>
        </Card>
    )
}

export default AboutCard