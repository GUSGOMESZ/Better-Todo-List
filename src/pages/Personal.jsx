import Heading from "../ui/Heading";
import Row from "../ui/Row";
import TaskTable from "../features/tasks/TaskTable";

function Personal() {
	const typeFilter = "Pessoal";

	return (
		<>
			<Row type="horizontal">
				<Heading as="h1">Tarefas Pessoais</Heading>
			</Row>

			<TaskTable typeFilter={typeFilter} />
		</>
	);
}

export default Personal;
