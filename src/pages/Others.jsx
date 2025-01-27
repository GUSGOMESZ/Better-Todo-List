import Heading from "../ui/Heading";
import Row from "../ui/Row";
import TaskTable from "../features/tasks/TaskTable";

function Others() {
	const typeFilter = "Outros";

	return (
		<>
			<Row type="horizontal">
				<Heading as="h1">Outras</Heading>
			</Row>

			<TaskTable typeFilter={typeFilter} />
		</>
	);
}

export default Others;
