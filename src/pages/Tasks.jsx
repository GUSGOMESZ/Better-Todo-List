import Heading from "../ui/Heading";
import Row from "../ui/Row";
import TaskTable from "../features/tasks/TaskTable";

function Tasks() {
	const typeFilter = "";

	return (
		<>
			<Row type="horizontal">
				<Heading as="h1">Todas as tarefas</Heading>
			</Row>

			<TaskTable typeFilter={typeFilter} />
		</>
	);
}

export default Tasks;
