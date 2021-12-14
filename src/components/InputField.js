import styled from "styled-components"

const InputContainer = styled.div`
    width: 100%;

    input {
        
        border: 2px solid var(--Shade3);
        border-radius: 5px;
        padding: 1em;
        width: 90%;
        margin: 1em 0;
    }

    input::placeholder {
        color: #D2D1DC;
    }
`

function InpputField(props){
    return(
        <InputContainer>
            <input value={props.value} type={props.type} placeholder={props.placeholder} />
        </InputContainer>        
    )
}

export default InpputField