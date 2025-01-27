import styled from "styled-components";

const StyledLogo = styled.div`
	text-align: center;
`;

const Img = styled.img`
	height: 9.6rem;
	width: auto;
`;

function Logo() {
	const logo = "/btlLogo.png";

	return (
		<StyledLogo>
			<Img src={logo} alt="Logo" />
		</StyledLogo>
	);
}

export default Logo;
