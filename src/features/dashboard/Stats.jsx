import {
	HiOutlineBanknotes,
	HiOutlineBriefcase,
	HiOutlineCalendarDays,
	HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";

import { getTasks } from "../../services/apiTasks";
import { useEffect, useState } from "react";

function Stats() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await getTasks();
			const sortedData = response.data.sort((a, b) => a.id - b.id);
			setData(sortedData);
		};

		fetchData();
	}, []);

	function getWorkLength() {
		return data.filter((task) => task.type === "Trabalho").length;
	}

	function getPersonalLength() {
		return data.filter((task) => task.type === "Pessoal").length;
	}

	function getStudyLength() {
		return data.filter((task) => task.type === "Estudos").length;
	}

	function getOthersLength() {
		return data.filter(
			(task) =>
				task.type !== "Trabalho" &&
				task.type !== "Estudos" &&
				task.type !== "Pessoal"
		).length;
	}

	function getDoneLength() {
		return data.filter((task) => task.status === "Concluído").length;
	}

	function getDoingLength() {
		return data.filter((task) => task.status === "Em andamento").length;
	}

	function getTodoLength() {
		return data.filter((task) => task.status === "Pendente").length;
	}

	return (
		<>
			<Stat
				title="Total de Tarefas"
				color="orange"
				icon={<HiOutlineBriefcase />}
				value={data.length}
			/>
			<Stat
				title="Trabalho"
				color="grey"
				icon={<HiOutlineBanknotes />}
				value={getWorkLength()}
			/>
			<Stat
				title="Pessoal"
				color="orange"
				icon={<HiOutlineCalendarDays />}
				value={getPersonalLength()}
			/>
			<Stat
				title="Estudos"
				color="grey"
				icon={<HiOutlineChartBar />}
				value={getStudyLength()}
			/>
			<Stat
				title="Outros"
				color="grey"
				icon={<HiOutlineChartBar />}
				value={getOthersLength()}
			/>
			<Stat
				title="Concluídas"
				color="orange"
				icon={<HiOutlineChartBar />}
				value={getDoneLength()}
			/>
			<Stat
				title="Em andamento"
				color="grey"
				icon={<HiOutlineChartBar />}
				value={getDoingLength()}
			/>
			<Stat
				title="Pendentes"
				color="orange"
				icon={<HiOutlineChartBar />}
				value={getTodoLength()}
			/>
		</>
	);
}

export default Stats;
