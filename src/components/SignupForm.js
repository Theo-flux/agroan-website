import styled from "styled-components";
import InputField from "./InputField";

const SignupFormContainer = styled.div`
    width: 100%;

`

function SignupForm(){
    return(
        <SignupFormContainer>
            <InputField type="text" placeholder="Full Name" />
            <InputField type="text" placeholder="Email Address" />
            <InputField type="phone" placeholder="Phone Number" />
            <InputField type="password" placeholder="Password" />
        </SignupFormContainer>
    )
}

export default SignupForm