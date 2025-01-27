import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useSignup() {
	const navigate = useNavigate();

	const { mutate: signup, isLoading } = useMutation({
		mutationFn: signupApi,
		onSuccess: () => {
			toast.success("Conta criada.");
			navigate("/login", { replace: true });
		},
		onError: (err) => {
			toast.error("Erro ao criar conta.");
			console.log("ERROR", err);
		},
	});

	return { signup, isLoading };
}
