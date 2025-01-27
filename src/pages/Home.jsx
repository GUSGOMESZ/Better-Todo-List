import Heading from "../ui/Heading";
import Row from "../ui/Row";
import DashboardLayout from "../features/dashboard/DashboardLayout";

function Home() {
	return (
		<>
			<Row type="horizontal">
				<Heading as="h1">Dashboard</Heading>
			</Row>

			<DashboardLayout />
		</>
	);
}

export default Home;
