import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 1em;
	padding: 1em;
	

	@media (min-width: 767px){
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
	}
	
`

const Item = styled(Link)`
	color: var(--Shade3);
	font-weight: 600;
	font-size: 1.2rem;
	cursor: pointer;
	text-decoration: none;
	

	@media (min-width: 767px){
		font-size: .875rem;
		color: var(--White);
		
	}

	&:hover {
		color: var(--Shade3);
	}
`

function NavItem({ changeToggler ,listener }) {
	return(
		<ItemContainer ref={listener}>
			<Item onClick={() => changeToggler()} to='/'>Home</Item>
			<Item onClick={() => changeToggler()} to='/'>About Us</Item>
			<Item onClick={() => changeToggler()} to='/'>Service</Item>
			<Item onClick={() => changeToggler()} to='/'>e-Naira</Item>
			<Item onClick={() => changeToggler()} to='/'>Contact</Item>
		</ItemContainer>
	)
}

export default NavItem