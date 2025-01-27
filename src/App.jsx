import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Business from "./pages/Business";
import Personal from "./pages/Personal";
import Study from "./pages/Study";
import Other from "./pages/Others";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";
import ProtectedRoute from "./ui/ProtectedRoute";
import AppLayout from "./ui/Layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import GlobalStyles from "./styles/GlobalStyles";
import CreateNewTask from "./pages/CreateNewTask";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000,
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route
						element={
							<ProtectedRoute>
								<AppLayout />
							</ProtectedRoute>
						}
					>
						<Route path="/dashboard" element={<Home />} />
						<Route path="/tasks" element={<Tasks />} />
						<Route path="/business" element={<Business />} />
						<Route path="/personal" element={<Personal />} />
						<Route path="/study" element={<Study />} />
						<Route path="/otherTasks" element={<Other />} />
						<Route path="/createTask" element={<CreateNewTask />} />
					</Route>

					<Route path="/" element={<Navigate replace to="/login" />} />
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<SignUp />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>

			<Toaster
				position="top-center"
				gutter={12}
				containerStyle={{ margin: "8px" }}
				toastOptions={{
					success: {
						duration: 3000,
					},
					error: {
						duration: 5000,
					},
					style: {
						fontSize: "16px",
						maxWidth: "500px",
						padding: "16px 24px",
						backgroundColor: "#fff",
						color: "grey",
					},
				}}
			/>
		</QueryClientProvider>
	);
}

export default App;
