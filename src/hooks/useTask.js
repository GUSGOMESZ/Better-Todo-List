import { useMutation } from "@tanstack/react-query";
import { createTask as createTaskApi } from "../services/apiTasks";
import { toast } from "react-hot-toast";

export function useTask() {
	const { mutate: createTask, isLoading } = useMutation({
		mutationFn: createTaskApi,
		onSuccess: () => {
			toast.success("Tarefa criada.");
		},
		onError: (err) => {
			toast.error("Erro ao criar tarefa.");
			console.log("ERROR", err);
		},
	});

	return { createTask, isLoading };
}
