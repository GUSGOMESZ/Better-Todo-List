import { getCurrentEmail } from "./apiAuth";
import supabase from "./supabase";

export async function createTask(taskName) {
	const { name, type } = taskName;

	let auxType = "";
	switch (type) {
		case "Trabalho":
		case "Pessoal":
		case "Estudos":
			auxType = type;
			break;
		default:
			auxType = "Outros";
	}

	const finalType = auxType;

	const email = await getCurrentEmail();

	const { data, error } = await supabase
		.from("tasks")
		.insert([{ name: name, type: finalType, userEmail: email }])
		.select();

	if (error) {
		console.error(error);
		return null;
	}

	return { data, error };
}

export async function getTasks(typeFilter) {
	const email = await getCurrentEmail();

	let query = supabase
		.from("tasks")
		.select("id, created_at, name, type, status")
		.eq("userEmail", email);

	if (typeFilter) {
		query = query.eq("type", typeFilter);
	}

	const { data, error } = await query;

	if (error) {
		console.error("Erro ao buscar tarefas:", error);
		return null;
	}

	return { data, error };
}

export async function updateTasks(taskId, newStatus) {
	const { data, error } = await supabase
		.from("tasks")
		.update({ status: newStatus })
		.eq("id", taskId)
		.select();

	if (error) {
		console.error(error);
		return null;
	}

	return data;
}

export async function deleteTasks(taskId) {
	const { data, error } = await supabase
		.from("tasks")
		.delete()
		.eq("id", taskId);

	if (error) {
		console.error(error);
		return null;
	}

	return data;
}
