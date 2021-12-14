import styled from "styled-components";
import InputField from "./InputField";

const BankFormContainer = styled.div`
    width: 100%;
`

function BankForm(){
    return(
        <BankFormContainer>
            <InputField type="text" placeholder="Enter Your Bank" />
            <InputField type="address" placeholder="Enter Your Account Name" />
            <InputField type="text" placeholder="Enter Your Account Number" />
        </BankFormContainer>
    )
}

export default BankForm

