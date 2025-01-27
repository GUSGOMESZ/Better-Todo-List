import styled from "styled-components";
import Stats from "./Stats";
import TypeChart from "./TypeChart";
import StatusChart from "./StatusChart";

const StyledDashboardLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: auto auto 33rem;
	gap: 2.4rem;
`;

function DashboardLayout() {
	return (
		<StyledDashboardLayout>
			<Stats />
			<TypeChart title={"Gráfico dos Tipos"} />
			<StatusChart title={"Gráfico dos Status"} />
		</StyledDashboardLayout>
	);
}

export default DashboardLayout;
