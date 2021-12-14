
import {useState, useEffect} from 'react'
import styled from "styled-components"
import { Fog } from "../assets"
import Container  from "../Global/Container"
import BankForm from "./BankInfo"
import Modal from './Modal'



const BankContainer = styled.div`
    margin: 10em auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    position: relative;
    
    

    @media (min-width: 960px){
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        height: 400px;
        max-width: 700px;
        box-shadow: 10px 10px 40px rgba(192, 197, 233, 0.6);
        border-radius: 10px;
    }
    
`

const RightSide = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1em;

    .flex-container {
        h2,p{
            margin: 0;
        }

        h2 {
            font-size: 1.5rem;
            font-weight: 800;
        }

        p {
            font-size: .7rem;
        }
    }

    .flex-container:last-of-type {
        width: 100%;
        
    }

    .btn-login {
        color: var(--White);
        font-weight: 500;
        font-size: 1rem;
        width: 100%;
        padding: 1em;
        border-radius: 5px;
        border: none;
        background: linear-gradient(250.79deg, #2B9B88 -4.87%, #045648 152.64%);
        box-shadow: 0px 7px 9px rgba(10, 82, 70, 0.16);
    }

    @media (min-width:960px){

        width: 40%;
        padding: 1em;

        .flex-container:last-of-type {
            
        } 
    }

`
const   LeftSide = styled.div`
    position: relative;    
    z-index: -1;

    img {
        width: 100%;
        min-height: 100%;
        object-fit: cover;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left:0;
        width: 100%;
        height:100%;
        z-index: 1;
        background: rgba(2, 149, 116, 0.48);
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    @media (max-width: 959px){
        display: none
    }

    @media (min-width: 960px){
        width: 50%;
        height: 100%;
    }
`
function Bank(){
    const [isloading, setIsLoading] = useState(false)
    const [userData, setUserData] = useState(null)
    const [acct, setAcct] = useState(0)
    

    function handleInput(event){
        const {value} = event.target
        setAcct(value)
    } 

    const url = 'https://api.withmono.com/accounts/61b60e5f5c98002fc7b0f214';
    const options = {
        method: 'GET',
        headers: {Accept: 'application/json', 'mono-sec-key': 'test_sk_i3U7vaK8aYonhsnwbKS6'}
    };

    const fetchUserData = () => {
        setIsLoading(true)
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                setUserData(data)
                console.log(data)
            })
            .catch(error => error.message)
    }

    return(
        <Container>
            <BankContainer>
                <RightSide>
                    <div className="flex-container">
                        <h2>Bank Details</h2>
                        <p>Enter your bank details to qualify for a quick loan.</p>
                    </div>
                    <BankForm acct={acct} handleInput={handleInput}/>
                    <div className="flex-container">
                        <button onClick={fetchUserData} className="btn-login">
                            {isloading ? "verifying...":"Verify Account"}
                        </button>
                    </div>
                </RightSide>

                <LeftSide>
                    <img src={Fog} alt="fog"/>
                </LeftSide>
            </BankContainer>
            {userData ? <Modal userData={userData} setUserData={setUserData}/>:null}
        </Container>
    )
}

export default Bank