import "./App.css";
import DigitalClock from "./components/digitalClock";
import Starry from "./components/starry";
import Home from "./pages/home";

function App() {
	return (
		<>
			<Starry />
			<DigitalClock />

			<main className="h-full">
				<Home />
			</main>
		</>
	);
}

export default App;
