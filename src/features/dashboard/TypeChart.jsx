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

	function formatData() {
		const percentData = [
			{
				type: "Trabalho",
				percentage: Math.round((getWorkLength() / data.length) * 100),
				color: "var(--color-orange-100)",
			},
			{
				type: "Pessoal",
				percentage: Math.round((getPersonalLength() / data.length) * 100),
				color: "var(--color-grey-500)",
			},
			{
				type: "Estudos",
				percentage: Math.round((getStudyLength() / data.length) * 100),
				color: "var(--color-orange-100)",
			},
			{
				type: "Outros",
				percentage: Math.round((getOthersLength() / data.length) * 100),
				color: "var(--color-grey-500)",
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
						width="30%"
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
