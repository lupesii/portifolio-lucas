import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

import Starry from "./components/starry";
import AboutMe from "./core-componets/about-me";
import Contact from "./core-componets/contact";
import Home from "./core-componets/home";
import Info from "./core-componets/info";
import Projects from "./core-componets/projects";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Starry />
			<Info />

			<main className="min-h-full">
				<Home />
				<AboutMe />
				<Projects />
			</main>
		</QueryClientProvider>
	);
}

export default App;
