import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";

import Starry from "./components/starry";
import Home from "./core-componets/home";
import Info from "./core-componets/info";
import Projects from "./core-componets/projects";
import Contact from "./core-componets/contact";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Starry />
			<Info />

			<main className="min-h-full">
				<Home />
				<Projects/>
				<Contact/>
			</main>

			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default App;
