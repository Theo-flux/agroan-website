
import styled from 'styled-components'

const Custombutton = styled.button`
	background-color: ${props => props.primary ? "var(--Shade3)":"var(--White)"};
	color: ${props => props.primary ? "white":"var(--Shade3)"};
	font-weight: 500; 
	padding: .5em 1.5em;
	transition: .4s all linear;	
	border: ${props => props.primary ? "none":"1px solid var(--Shade3)"};
	box-shadow: ${props => props.primary ? "none":"0 3px 5px #99999930"};
	cursor: pointer;
	border-radius: 5px;

	&:hover {
        border: 1px solid var(--Shade3);
		background-color: ${props => props.primary ? "white":"white"};
		color: ${props => props.primary ? "var(--Shade3)":"var(--Shade3)"};
		outline: ${props => props.primary ? "2px solid var(--Soft-Blue)":"2px solid var(--Grayish-Blue)"};
		outline-offset: -3px;
		box-shadow: 0 3px 5px #99999930;
		transition: .3s all linear;
	}
`

export default function Button({text,...props}) {
	return(
		<Custombutton {...props}>
			{text}
		</Custombutton>
	)
}