import styled from "styled-components";
import InputField from "./InputField";

const LoginFormContainer = styled.div`
    width: 100%;

`

function LoginForm(){
    return(
        <LoginFormContainer>
            <InputField type="text" placeholder="Email Adress or Phone Number" />
            <InputField type="password" placeholder="Password" />
        </LoginFormContainer>
    )
}

export default LoginForm