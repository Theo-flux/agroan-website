import styled from "styled-components";
import InputField from "./InputField";

const PersonalFormContainer = styled.div`
    width: 100%;
`

function PersonalForm(){
    return(
        <PersonalFormContainer>
            <InputField type="text" placeholder="Enter your number" value="+234 811 234 5678"/>
            <InputField type="address" placeholder="Enter your address" value="Lagos-Abeokuta Express Way, Lagos Nigeria"/>
            <InputField type="text" placeholder="Enter your number" value="Poultry Farming"/>
            <InputField type="text" placeholder="Enter your number" value="Ajayi Poultry Farm"/>
        </PersonalFormContainer>
    )
}

export default PersonalForm