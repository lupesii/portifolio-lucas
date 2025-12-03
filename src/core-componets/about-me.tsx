import Perfil from "../assets/images/foto.svg?react";
import Container from "../components/container";
import LanguageIcons from "../components/languagens-icons";
import Text from "../components/text";
import Title from "../components/title";

export default function AboutMe() {
	return (
		<Container
			as="section"
			className="grid justify-center content-center grid-cols-[auto_1fr] grid-rows-[repeat(2,max-content)] gap-y-5"
		>
			<Title className="whitespace-nowrap">About Me</Title>
			<aside className="flex gap-8 row-start-2 col-start-1 -col-end-1">
				<div className="flex flex-col justify-between">
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
						systems development course. I study on the internet courses with
						many projects, especially in the Front-End area.
					</Text>
					<div className="flex flex-col gap-3">
						<Text as="h2" variant="anony-md-bold">
							Tools and Technologies I use
						</Text>
						<div className="grid grid-cols-2 grid-flow-row auto-rows-fr gap-y-10">
							<LanguageIcons card title="Front-End" />
							<LanguageIcons card title="Back-End" />
							<LanguageIcons card title="Tools" />
							<LanguageIcons card title="UI Design" />
						</div>
					</div>
				</div>
			</aside>
		</Container>
	);
}
