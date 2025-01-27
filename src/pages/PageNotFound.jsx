import styled from "styled-components";
import { useMoveBack } from "../hooks/useMoveBack";

const StyledPageNotFound = styled.main`
	height: 100vh;
	background-color: #f9fafb;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 4.8rem;
`;

const Button = styled.button`
	height: 2rem;
	width: 4rem;

	margin: 20px 0;
`;

function PageNotFound() {
	const moveBack = useMoveBack();

	return (
		<StyledPageNotFound>
			<h1>Página não encontrada 😥</h1>
			<Button onClick={moveBack}>&larr; Voltar</Button>
		</StyledPageNotFound>
	);
}

export default PageNotFound;
