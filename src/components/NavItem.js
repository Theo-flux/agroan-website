import styled from 'styled-components'

const ItemContainer = styled.div`
	padding: 2em 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 1em;
	width: 40%;

	@media (min-width: 767px){
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 50%;
	}
	
`

const Item = styled.a`
	color: var(--Shade3);
	font-weight: 600;
	font-size: 1.5rem;
	cursor: pointer;

	@media (min-width: 767px){
		font-size: 1.2rem;
	}

	&:hover {
		color: var(--White);
	}
`

function NavItem({ listener }) {
	return(
		<ItemContainer ref={listener}>
			<Item>About Us</Item>
			<Item>Service</Item>
			<Item>e-Naira</Item>
			<Item>Contact</Item>
		</ItemContainer>
	)
}

export default NavItem