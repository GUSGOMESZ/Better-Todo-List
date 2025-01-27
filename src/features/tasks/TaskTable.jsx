import styled from "styled-components";
import { FaXmark } from "react-icons/fa6";
import { IoCheckmarkSharp } from "react-icons/io5";
import { LuLoader } from "react-icons/lu";
import { useEffect, useState } from "react";
import { getTasks, updateTasks, deleteTasks } from "../../services/apiTasks";
import { format } from "date-fns";

const Table = styled.div`
	display: grid;
	grid-template-columns: 2fr 3fr 2fr 2fr 2fr 2fr;
	border: 1px solid #ccc;
	border-radius: 8px;
	overflow: hidden;
`;

const Header = styled.div`
	display: contents;
`;

const Row = styled.div`
	display: contents;
	align-items: center;
	background-color: #f9f9f9;
`;

const Cell = styled.div`
	padding: 10px 0;
	border-bottom: 1px solid #eee;
	text-align: center;

	&.header {
		background-color: #f4f4f4;
		font-weight: bold;
	}
`;

const Span = styled.span`
	width: fit-content;
	text-transform: uppercase;
	font-size: 1.1rem;
	font-weight: 600;
	padding: 0.4rem 1.2rem;
	border-radius: 100px;

	&.status {
		color: white;
		background-color: ${(props) =>
			props.type === "Em andamento"
				? "var(--color-brand-800)"
				: props.type === "Pendente"
				? "var(--color-grey-600)"
				: props.type === "Concluído"
				? "var(--color-green-700)"
				: ""};
		border-radius: 10px;
	}
`;

function TaskTable({ typeFilter }) {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await getTasks(typeFilter);
			const sortedData = response.data.sort((a, b) => a.id - b.id);
			setData(sortedData);
		};

		fetchData();
	}, [typeFilter]);

	function handleDone(id) {
		setData((prevData) =>
			prevData.map((item) =>
				item.id === id ? { ...item, status: "Concluído" } : item
			)
		);

		updateTasks(id, "Concluído");
	}

	function handleStart(id) {
		setData((prevData) =>
			prevData.map((item) =>
				item.id === id ? { ...item, status: "Em andamento" } : item
			)
		);

		updateTasks(id, "Em andamento");
	}

	function handleDelete(id) {
		setData((prevData) => prevData.filter((item) => item.id !== id));

		deleteTasks(id);
	}

	return (
		<Table>
			<Header>
				<Cell className="header">Tarefa ID</Cell>
				<Cell className="header">Nome</Cell>
				<Cell className="header">Tipo</Cell>
				<Cell className="header">Data de Criação</Cell>
				<Cell className="header">Status</Cell>
				<Cell className="header"></Cell>
			</Header>

			{data.map((item) => (
				<Row key={item.id}>
					<Cell>{item.id}</Cell>
					<Cell>{item.name}</Cell>
					<Cell>{item.type}</Cell>
					<Cell>{format(item.created_at, "dd MMM yyyy")}</Cell>
					<Cell>
						<Span className="status" type={item.status}>
							{item.status}
						</Span>
					</Cell>
					<Cell>
						<button onClick={() => handleDone(item.id)}>
							<IoCheckmarkSharp />
						</button>
						<button onClick={() => handleStart(item.id)}>
							<LuLoader />
						</button>
						<button onClick={() => handleDelete(item.id)}>
							<FaXmark />
						</button>
					</Cell>
				</Row>
			))}
		</Table>
	);
}

export default TaskTable;
