import { useState } from 'react'
import styled from "styled-components"
import { Approved } from "../assets"
import Container from "../Global/Container"


const ModalContainer = styled.div`
    position: absolute;
    top: 40%;
    left: 7%;
    transform: translate(0,-50%);
    background: #FFFFFF;
    box-shadow: 0px 8px 36px rgba(0, 0, 0, 0.16);
    border-radius: 16px;
    width: 300px;
    min-height: 330px;

    @media (min-width: 960px){
        left: 40%;
    }
`
const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
    i {
        align-self: flex-end;
        font-size: 1.2rem;
    }

    p{
        text-align: center;
        font-size: .875rem;
        margin-top: 0;
    }
`
const Btn = styled.button`
    width: 100%;
    padding: .8em;
    background: linear-gradient(250.79deg, #2B9B88 -4.87%, #045648 152.64%);
    box-shadow: 0px 7px 9px rgba(10, 82, 70, 0.16);
    border-radius: 5px;
    border: none;
    transition: .4s all ease-in;
    text-align: center;
    text-decoration: none;
    font-weight: 800;
    color: var(--White);
    font-size: .8rem;

`

const UserDetails = styled.div`
    width: 100%;

    & > div {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        
        p {
            font-size: .8rem;
        }

        .balance {
            color: #00B446;
        }
    }
`

function Modal({ userData ,setUserData}){

    const [viewDetails, setViewDetails] = useState(false)

    function close(data){
        data(null)
    }

    function changeView(){
        setViewDetails(!viewDetails)
    }

    return(
        <ModalContainer>
            <Container>
                <ModalContent>                
                    <i onClick={() => close(setUserData)} class="ri-close-fill"></i>
                    <img src={Approved} alt="approved"/>

                    <h3>Congratulations!</h3>

                    <p>Your bank account details have been sucessfully verified. 
                        You are now eligible for a loan.
                    </p>
                    
                    {
                        viewDetails ? 
                            <UserDetails>
                                <div><p>Bank Name</p> <strong>{userData.account.institution.name}</strong></div>
                                <div><p>Account Name</p> <strong>{userData.account.name}</strong></div>
                                <div><p>Account Number</p> <strong>{userData.account.accountNumber}</strong></div>
                                <div><p>Account Balance</p> <strong className="balance">{userData.account.balance.toLocaleString()} <sub>NGN</sub></strong></div>
                            </UserDetails>
                        :
                        <Btn onClick={() => changeView()}>
                            view account details
                        </Btn>
                    
                    }

                </ModalContent>
            </Container>
        </ModalContainer>
    )
}

export default Modal