import Circle from "../components/circle";
import ContactLinks from "../components/contact-links";
import Container from "../components/container";
import LanguageIcons from "../components/languagens-icons";
import Text from "../components/text";

export default function Home() {
	return (
		<Container
			as="section"
			aria-label="Perfil"
			className="justify-center items-center flex-col h-full"
		>
			<div className="relative">
				<span
					className="relative flex mb-1.25 size-24 sm:size-36 md:size-40 2xl:size-48 overflow-hidden rounded-full "
					aria-description="Wrapper Foto"
				>
					<img
						src="/public/perfil.jpg"
						alt="Foto de perfil do Lucas"
						className="aspect-square h-full w-full z-1"
					/>
				</span>
				<div className="animate-pulse absolute azul shadow-[0px_0px_35px_10px_#0069b9] top-0 left-0 size-24 sm:size-36 md:size-40 2xl:size-48 rounded-full"></div>
			</div>

			<Text as="h1" variant="anony-lg" bold>
				Lucas
			</Text>

			<div className="inline-flex justify-center items-center flex-col gap-3.25 mb-3.75">
				<div className="flex justify-center items-center gap-0.5">
					<Text as="h2" variant="anony-xsm">
						Full-Stack Developer
					</Text>
					<Circle />
				</div>
				<Text as="h2" variant="anony-xsm" className="text-center">
					Learning, Building and gaining skills with every line code
				</Text>
			</div>

			<ContactLinks />

			<div className="flex flex-col justify-center items-center gap-3.5">
				<Text as="h3" variant="anony-sm" bold>
					Experiences With
				</Text>
				<LanguageIcons />
			</div>
		</Container>
	);
}
