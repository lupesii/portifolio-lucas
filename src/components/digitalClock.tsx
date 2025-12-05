import { useEffect, useState } from "react";
import Text from "./text";

export default function DigitalClock() {
	const [hora, setHora] = useState<string>("");
	const [data, setData] = useState<string>("");

	useEffect(() => {
		function atualizaHora() {
			const horaAtual = new Date();
			const optionsTime: Intl.DateTimeFormatOptions = {
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
				hour12: false,
			};
			const optionsDate: Intl.DateTimeFormatOptions = {
				weekday: "short",
				day: "numeric",
				month: "short",
			};

			const horarioFormatado = horaAtual.toLocaleTimeString(
				"en-US",
				optionsTime,
			);
			const dataFormatada = horaAtual.toLocaleDateString("en-US", optionsDate);

			setHora(horarioFormatado);
			setData(dataFormatada);
		}

		atualizaHora();
		const intervalHora = setInterval(atualizaHora, 1000);

		return () => {
			clearInterval(intervalHora);
		};
	}, []);

	return (
		<aside
			className={`
		px-2 py-1.5 rounded-lg bg-cinza-400 pointer-events-none 
    inline-flex justify-center items-center gap-2 w-max h-ma
    `}
		>
			<Text variant={"anony-sm-bold"}>{hora}</Text>
			<Text variant={"anony-sm-bold"}>{data}</Text>
		</aside>
	);
}
