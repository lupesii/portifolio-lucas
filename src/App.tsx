import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";

import Starry from "./components/starry";
import Toolbar from "./components/toolbar";
import Home from "./core-componets/home";
import Info from "./core-componets/info";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Starry />
			<Info />
			<Toolbar />

			<main className="h-full">
				<Home />
			</main>

			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default App;
