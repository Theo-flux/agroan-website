import styled from 'styled-components'
import {Agroan} from '../assets'
import SocialItem from './SocialItem'
import Container from '../Global/Container'

const FooterContainer = styled.div`
	background-color: var(--Shade3);
`
const FooterContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h4 {
		color: var(--White);
		font-size: 1.5rem;
		margin-bottom: 0;
		text-align: center;
	}

	.flex-item {
		img {
			width: 70%;
			padding-top: 2em;
		}
	}


	@media (min-width: 967px){
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;

		h4 {
			text-align: left;
		}
		.flex-item {
			width: 200px;
		}
	}
`
const Child = styled.p`
	color: var(--White);
	text-align: center;
	font-size: .875rem;
	max-width: 300px;
	@media (min-width: 967px){
		text-align: left;
	}
`



function Footer(){
	return(
		<FooterContainer>
			<Container>
				<FooterContent>
					<div className="flex-item">
						<img src={Agroan} alt=""/>
						<div className='child-container'>
							<Child>4b abc Street Ikeja, Lagos State</Child>
							<Child>+(234) 801-234-5678</Child>
							<Child>support@agroan.ng.co</Child>
						</div>
						<SocialItem/>
					</div>

					<div className="flex-item">
						<h4>Explore</h4>
						<div className='child-container'>
							<Child>Apply for loan</Child>
							<Child>Log in</Child>
							<Child>Sign up</Child>
						</div>
					</div>

					<div className="flex-item">
						<h4>Contact Us</h4>
						<div className='child-container'>
							<Child>Conatact Us</Child>
							<Child>About Us</Child>
						</div>
					</div>

					<div className="flex-item">
						<h4>About Us</h4>
						<div className='child-container'>
							<Child>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								Sapien commodo aliquam quis enim Lorem ipsum dolor sit amet, 
								consectetur adipiscing elit. Sapien commodo aliquam quis enim 
							</Child>
						</div>
					</div>
				</FooterContent>
			</Container>
		</FooterContainer>
	)
}

export default Footer