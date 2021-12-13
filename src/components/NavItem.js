import styled from 'styled-components'

const ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 1em;
	

	@media (min-width: 767px){
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
	}
	
`

const Item = styled.a`
	color: var(--Shade3);
	font-weight: 600;
	font-size: 1.5rem;
	cursor: pointer;
	padding-left: 1em;

	@media (min-width: 767px){
		font-size: .875rem;
		color: var(--White);
	}

	&:hover {
		color: var(--Shade3);
	}
`

function NavItem({ listener }) {
	return(
		<ItemContainer ref={listener}>
			<Item>Home</Item>
			<Item>About Us</Item>
			<Item>Service</Item>
			<Item>e-Naira</Item>
			<Item>Contact</Item>
		</ItemContainer>
	)
}

export default NavItem