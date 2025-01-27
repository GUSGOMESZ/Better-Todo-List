import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
	HiOutlineCalendarDays,
	HiOutlineHome,
	HiOutlineHomeModern,
} from "react-icons/hi2";
import { FaTasks } from "react-icons/fa";
import { IoSchool, IoAddCircleSharp } from "react-icons/io5";
import { BsFillMotherboardFill } from "react-icons/bs";

const NavList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
	&:link,
	&:visited {
		display: flex;
		align-items: center;
		gap: 1.2rem;

		color: var(--color-grey-600);
		font-size: 1.6rem;
		font-weight: 500;
		padding: 1.2rem 2.4rem;
		transition: all 0.3s;
	}

	&:hover,
	&:active,
	&.active:link,
	&.active:visited {
		color: var(--color-grey-800);
		background-color: var(--color-grey-50);
		border-radius: var(--border-radius-sm);
	}

	& svg {
		width: 2.4rem;
		height: 2.4rem;
		color: var(--color-grey-400);
		transition: all 0.3s;
	}

	&:hover svg,
	&:active svg,
	&.active:link svg,
	&.active:visited svg {
		color: var(--color-orange-100);
	}
`;

function MainNav() {
	return (
		<nav>
			<NavList>
				<li>
					<StyledNavLink to="/dashboard">
						<HiOutlineHome />
						<span>Dashboard</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/tasks">
						<FaTasks />
						<span>Todas as tarefas</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/business">
						<HiOutlineCalendarDays />
						<span>Trabalho</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/personal">
						<HiOutlineHomeModern />
						<span>Pessoal</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/study">
						<IoSchool />
						<span>Estudos</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/otherTasks">
						<BsFillMotherboardFill />
						<span>Outros</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/createTask">
						<IoAddCircleSharp />
						<span>Criar Tarefa</span>
					</StyledNavLink>
				</li>
			</NavList>
		</nav>
	);
}

export default MainNav;
