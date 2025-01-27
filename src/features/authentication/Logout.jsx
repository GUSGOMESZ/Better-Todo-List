import styled from "styled-components";
import SpinnerMini from "../../ui/SpinnerMini";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";

const ButtonIcon = styled.button`
	background: none;
	border: none;
	padding: 0.6rem;
	border-radius: var(--border-radius-sm);
	transition: all 0.2s;

	&:hover {
		background-color: var(--color-grey-100);
	}

	& svg {
		width: 2.2rem;
		height: 2.2rem;
		color: var(--color-orange-100);
	}
`;

function Logout() {
	const { logout, isLoading } = useLogout();

	return (
		<ButtonIcon disabled={isLoading} onClick={logout}>
			{!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
		</ButtonIcon>
	);
}

export default Logout;
