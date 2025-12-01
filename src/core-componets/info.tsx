import { useState } from "react";
import WeatherIcon from "../assets/icons/weather/weather.svg?react";
import DigitalClock from "../components/digitalClock";
import Icon from "../components/icon";
import WeatherCard from "../components/weather-card";

export default function Info() {
	const [visible, setVisible] = useState(false);

	function weatherVisibility() {
		setVisible(true);
		setTimeout(() => {
			weatherHidden();
			console.log("Executou");
		}, 2000);
	}

	function weatherHidden() {
		setVisible(false);
	}

	return (
		<div className="fixed top-2 left-2 flex flex-col gap-2">
			<DigitalClock />
			<div className="flex gap-2">
				<button
					className="bg-cinza-400 p-1.75 w-fit h-fit rounded-full hover:bg-cinza-300"
					onClick={!visible ? weatherVisibility : weatherHidden}
				>
					<Icon svg={WeatherIcon} size="none" className="w-6 h-6" />
				</button>
				<WeatherCard visibility={visible} />
			</div>
		</div>
	);
}
