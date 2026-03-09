import Text from "../components/text";
import { TechnologiesTypes } from "../types/technologies";
import Technologies from "./technologies";

export default function AboutMeInfo() {
	return (
		<aside className="flex flex-col md:flex-row gap-15">
			<div className="flex flex-col gap-2 min-w-[250px] md:w-[250px]">
				<img
					src="/perfil.jpg"
					loading="lazy"
					decoding="async"
					alt="Foto de perfil do Lucas"
					className="aspect-video sm:aspect-square md:aspect-3/4 object-cover h-auto w-full rounded-2xl"
				/>
				<a
					href="/Lucas Silva e Pereira.pdf"
					download="Curriculo_Lucas.pdf"
					className="inline-block w-full text-center bg-cinza-400 text-white border border-azul font-sans font-semibold text-[18px] py-1.5 rounded-5"
				>
					My Resume
				</a>
			</div>
			<div className="flex flex-col gap-7">
				<Text as="h1" variant="anony-md" bold italic>
					Hi, I am Lucas Pereira
				</Text>

				<div>
					<div>
						<Text as="p" variant="albert-md">
							I am a Full-Stack developer, always looking for new experiences
							and oportunies to learn and grow.
						</Text>
					</div>
					<div>
						<Text as="p" variant="albert-md">
							I studied in a technical school in the systems development course.
						</Text>
					</div>
					<div>
						<Text as="p" variant="albert-md">
							I study on the internet courses with many projects, especially in
							the Front-End area.
						</Text>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<Text as="h2" variant="anony-md" bold>
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
