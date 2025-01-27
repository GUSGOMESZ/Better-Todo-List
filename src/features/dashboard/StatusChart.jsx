import styled from "styled-components";
import Heading from "../../ui/Heading";
import {
	Cell,
	Legend,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
} from "recharts";
import { getTasks } from "../../services/apiTasks";
import { useEffect, useState } from "react";

const ChartBox = styled.div`
	background-color: var(--color-grey-0);
	border: 1px solid var(--color-grey-100);
	border-radius: var(--border-radius-md);

	padding: 2.4rem 3.2rem;
	grid-column: span 2;

	& > *:first-child {
		margin-bottom: 1.6rem;
	}

	& .recharts-pie-label-text {
		font-weight: 600;
	}
`;

function DurationChart({ title }) {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await getTasks();
			const sortedData = response.data.sort((a, b) => a.id - b.id);
			setData(sortedData);
		};

		fetchData();
	}, []);

	function getDoneLength() {
		return data.filter((task) => task.status === "Concluído").length;
	}

	function getDoingLength() {
		return data.filter((task) => task.status === "Em andamento").length;
	}

	function getTodoLength() {
		return data.filter((task) => task.status === "Pendente").length;
	}

	function formatData() {
		const percentData = [
			{
				type: "Concluídas",
				percentage: Math.round((getDoneLength() / data.length) * 100),
				color: "var(--color-green-700)",
			},
			{
				type: "Em andamento",
				percentage: Math.round((getDoingLength() / data.length) * 100),
				color: "var(--color-brand-800)",
			},
			{
				type: "Pendentes",
				percentage: Math.round((getTodoLength() / data.length) * 100),
				color: "var(--color-grey-600)",
			},
		];

		return percentData;
	}

	return (
		<ChartBox>
			<Heading as="h2">{title}</Heading>
			<ResponsiveContainer width="100%" height={240}>
				<PieChart>
					<Pie
						data={formatData()}
						nameKey="type"
						dataKey="percentage"
						innerRadius={85}
						outerRadius={110}
						cx="40%"
						cy="50%"
						paddingAngle={3}
					>
						{formatData().map((entry) => (
							<Cell fill={entry.color} stroke={entry.color} key={entry.type} />
						))}
					</Pie>
					<Tooltip />
					<Legend
						verticalAlign="middle"
						align="right"
						width="35%"
						layout="vertical"
						iconSize={15}
						iconType="circle"
					/>
				</PieChart>
			</ResponsiveContainer>
		</ChartBox>
	);
}

export default DurationChart;
