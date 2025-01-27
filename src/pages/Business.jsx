import Heading from "../ui/Heading";
import Row from "../ui/Row";
import TaskTable from "../features/tasks/TaskTable";

function Business() {
	const typeFilter = "Trabalho";

	return (
		<>
			<Row type="horizontal">
				<Heading as="h1">Tarefas de Trabalho</Heading>
			</Row>

			<TaskTable typeFilter={typeFilter} />
		</>
	);
}

export default Business;
