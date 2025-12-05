import Perfil from "../assets/images/foto.svg?react";
import Text from "../components/text";
import { TechnologiesTypes } from "../types/technologies";
import Technologies from "./technologies";

export default function AboutMeInfo() {
	return (
		<aside className="flex flex-col lg:flex-row gap-15">
			<div className="flex flex-col gap-2">
				<Perfil />
				<a
					href="/Lucas Silva e Pereira.pdf"
					download="Curriculo_Lucas.pdf"
					className="inline-block w-full  text-center bg-cinza-400 text-white border border-azul font-mono font-semibold text-[28px] py-5 rounded-[10px]"
				>
					My Resume
				</a>
			</div>
			<div className="flex flex-col gap-7">
				<Text as="h1" variant="anony-lg">
					Hi, I am Lucas Pereira
				</Text>
				<Text as="p" variant="anony-lg">
					I am a Full-Stack developer, always looking for new experiences and
					oportunies to learn and grow. I studied in a technical school in the
					systems development course. I study on the internet courses with many
					projects, especially in the Front-End area.
				</Text>
				<div className="flex flex-col gap-8">
					<Text as="h2" variant="anony-md-bold">
						Tools and Technologies I use
					</Text>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-10">
						<Technologies tech={TechnologiesTypes.front} />
						<Technologies tech={TechnologiesTypes.back} />
						<Technologies tech={TechnologiesTypes.tools} />
						<Technologies tech={TechnologiesTypes.ui} />
					</div>
				</div>
			</div>
		</aside>
	);
}
