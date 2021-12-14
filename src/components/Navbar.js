import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Agroan } from '../assets'
import styled from 'styled-components'
import Container from '../Global/Container'
import NavItem from './NavItem'
import SocialItem from './SocialItem'
import Button from './Button'
import Drop from './Drop'


const NavContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    padding: .5em 0;
    width: 100%;
    background: rgba(0, 0, 0, .60);
    border-bottom: 3px solid var(--Shade3);

    @media (min-width: 767px){
      padding: 0;  
    }
    
`

const NavContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media (max-width: 766px){
        .row {
            position: absolute;
            top: 70px;
            left: -100%;
            width: 80%;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding-top: 4em;
            background-color: white;
            min-width: 0px;
            z-index: 1;
        }
    }
    
    .drop-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        aligh-items: center;
        gap: 1em;
        position: absolute;
        top: 100px;
        right: -100%;
        z-index: 99;

        .ri-close-line {
            color: var(--Black);
            font-size: 1.2rem;
            align-self: flex-end;
            width: 40px;
            height: 40px;
            border-radius: 50px;
            background-color: rgb(256, 256, 256);
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0px 8px 36px rgba(0, 0, 0, 0.16);
        }
    }

    @media (min-width: 767px){

        .row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 60%;
            // border: 1px solid magenta;
        }

    }
`


const Logo = styled.div`
    width: 35%;

    img {
        width: 100%;
    }

    @media (min-width: 767px){
        width: 15%;
    }
`

const Menu = styled.div`

    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: rgba(256, 256, 256, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;

    i {
        color: white;
        font-size: 1.2rem;
    }

    @media (min-width: 767px){
        display: none;
    }
`
function Navbar(){

    const [isToggled, setIsToggled] = useState(false)
    const [showDrop, setShowDrop] = useState(false)
	const menuItems = useRef(null)
    const dropItems = useRef(null)

	function changeToggler(){
		setIsToggled(!isToggled)
	}

    function handleDrop(){
        setShowDrop(!showDrop)
    }

    useEffect(() => {
        if(showDrop){
            if(isToggled){
              setIsToggled(!isToggled)  
            }
            dropItems.current.style.right = '5%'
            dropItems.current.style.transition = '.2s right linear'
        }else{
            dropItems.current.style.right = '-100%'
            dropItems.current.style.transition = '.2s right linear'
        }
    },[showDrop, isToggled])

	useEffect(()=>{
		
		if(isToggled){
			menuItems.current.style.left = '0%'
			menuItems.current.style.transition = '.2s left linear'
		}else{
			menuItems.current.style.left = '-100%'
			menuItems.current.style.transition = '.2s left linear'
		}
			

	},[isToggled])

    return(
        <NavContainer>
            <Container>
                <NavContent>
                    <Logo>
                        <Link to='/'>
                            <img src={Agroan} alt="agroan-logo-svg"/>
                        </Link>
                    </Logo>

                    <Menu>
                        { isToggled ? <i onClick={() => changeToggler()} class="ri-close-line"></i>:<i onClick={() => changeToggler()} className="ri-menu-line"></i>}
                    </Menu>

                    <div className='row' ref={menuItems}>
                        <NavItem changeToggler={changeToggler}/>
                        <Button onClick={() => handleDrop()} icon='ri-account-circle-fill' text='Account'/>
                    </div>

                    <div  className="drop-container" ref={dropItems}>
                        <i onClick={() => handleDrop()} className="ri-close-line"></i>
                        <Drop handleDrop = {handleDrop}/>
                    </div>
                </NavContent>
            </Container>
        </NavContainer>
    )
}

export default Navbar