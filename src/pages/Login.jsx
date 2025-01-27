import { useState } from "react";
import { useLogin } from "../features/authentication/useLogin";
import styled from "styled-components";
import SpinnerMini from "../ui/SpinnerMini";

const PageWrapper = styled.div`
	height: 100vh;
	width: 100vw;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: var(--color-grey-50);
`;

const Img = styled.img`
	height: 10rem;
	width: auto;
`;

const LoginBox = styled.div`
	min-height: 40rem;
	min-width: 40rem;

	background-color: var(--color-grey-0);
	border: 1px solid var(--color-grey-100);
	border-radius: var(--border-radius-md);
	padding: 10px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const LoginContent = styled.div`
	min-height: 30rem;
	min-width: 36rem;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	padding: 20px;
	margin-top: 10px;

	border: 1px solid var(--color-grey-300);
`;

const Label = styled.h1`
	padding-bottom: 10px;
`;

const Row = styled.div`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	border: 1px solid var(--color-grey-300);
	background-color: var(--color-grey-0);
	border-radius: var(--border-radius-sm);
	padding: 0.8rem 1.2rem;
	box-shadow: var(--shadow-sm);
`;

const SignUpText = styled.div`
	padding-top: 10px;
	font-size: 15px;
`;

const Button = styled.button`
	height: 4rem;
	width: 22rem;

	background-color: var(--color-yellow-500);

	border: none;
	border-radius: var(--border-radius-sm);
	box-shadow: var(--shadow-sm);

	margin-top: 15px;

	&:hover {
		background-color: var(--color-yellow-100);
	}
`;

function Login() {
	const logo = "/btlLogo.png";

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login, isLoading } = useLogin();

	function handleSubmit(e) {
		e.preventDefault();

		if (!email || !password) return;

		login(
			{ email, password },
			{
				onSettled: () => {
					setEmail("");
					setPassword("");
				},
			}
		);
	}

	return (
		<PageWrapper>
			<form onSubmit={handleSubmit}>
				<LoginBox>
					<Img src={logo} alt="logo" />
					<LoginContent>
						<Label>Login</Label>
						<Row>
							<label>Email</label>
							<Input
								type="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								disabled={isLoading}
							/>
						</Row>
						<Row>
							<label>Senha</label>
							<Input
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								disabled={isLoading}
							/>
						</Row>
						<SignUpText>
							Não possui conta ? <a href="/signUp">Criar uma </a>
						</SignUpText>
						<Row>
							<Button disabled={isLoading}>
								{!isLoading ? "Login" : <SpinnerMini />}
							</Button>
						</Row>
					</LoginContent>
				</LoginBox>
			</form>
		</PageWrapper>
	);
}

export default Login;
