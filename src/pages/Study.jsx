import Heading from "../ui/Heading";
import Row from "../ui/Row";
import TaskTable from "../features/tasks/TaskTable";

function Study() {
	const typeFilter = "Estudos";

	return (
		<>
			<Row type="horizontal">
				<Heading as="h1">Tarefas dos Estudos</Heading>
			</Row>

			<TaskTable typeFilter={typeFilter} />
		</>
	);
}

export default Study;
