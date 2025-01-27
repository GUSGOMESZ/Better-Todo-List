import styled from "styled-components";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import FormRow from "../ui/FormRow";
import { useState } from "react";
import { useTask } from "../hooks/useTask";

const Form = styled.form`
	padding: 2.4rem 4rem;
	background-color: var(--color-grey-0);
	border: 1px solid var(--color-grey-100);
	border-radius: var(--border-radius-md);

	overflow: hidden;
	font-size: 1.4rem;
`;

const StyledFormRow = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: 24rem 1fr 1.2fr;
	gap: 2.4rem;

	padding: 1.2rem 0;

	&:first-child {
		padding-top: 0;
	}

	&:last-child {
		padding-bottom: 0;
	}

	&:not(:last-child) {
		border-bottom: 1px solid var(--color-grey-100);
	}

	&:has(button) {
		display: flex;
		justify-content: flex-end;
		gap: 1.2rem;
	}
`;

const Label = styled.label`
	font-size: 2rem;
	font-weight: 700;
`;

const Input = styled.input`
	height: auto;
	width: 30rem;

	border: 1px solid var(--color-grey-300);
	background-color: var(--color-grey-0);
	border-radius: var(--border-radius-sm);
	padding: 0.8rem 1.2rem;
	box-shadow: var(--shadow-sm);
`;

const Button = styled.button`
	height: 4rem;
	width: 15rem;

	background-color: var(--color-yellow-500);

	border: none;
	border-radius: var(--border-radius-sm);
	box-shadow: var(--shadow-sm);

	margin-top: 15px;

	&:hover {
		background-color: var(--color-yellow-100);
	}
`;

function CreateNewTask() {
	const [name, setName] = useState("");
	const [type, setType] = useState("");
	const { createTask, isLoading } = useTask();

	function onSubmit(e) {
		e.preventDefault();

		if (!name || !type) return;

		createTask(
			{ name, type },
			{
				onSettled: () => {
					setName("");
					setType("");
				},
			}
		);
	}

	return (
		<>
			<Row type="horizontal">
				<Heading as="h1">Criar Nova Tarefa</Heading>
			</Row>

			<Form onSubmit={onSubmit}>
				<StyledFormRow>
					<Label>Tarefa</Label>
					<Input
						type="text"
						id="taskName"
						value={name}
						onChange={(e) => setName(e.target.value)}
						disabled={isLoading}
					/>
				</StyledFormRow>

				<StyledFormRow>
					<Label>Tipo</Label>
					<Input
						type="text"
						id="type"
						value={type}
						onChange={(e) => setType(e.target.value)}
						disabled={isLoading}
					/>
				</StyledFormRow>

				<FormRow>
					<Button disabled={isLoading}>Criar</Button>
				</FormRow>
			</Form>
		</>
	);
}

export default CreateNewTask;
