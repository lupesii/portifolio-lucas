import Perfil from "../assets/images/perfil-espiral.svg?react";
import Circle from "../components/circle";
import ContactLinks from "../components/contact-links";
import LanguageIcons from "../components/languagens-icons";
import Text from "../components/text";

export default function Home() {
	return (
		<section
			aria-label="Perfil"
			className="flex justify-center items-center flex-col min-w-full h-full"
		>
			<Perfil className="mb-1.25" />
			<Text as="h1" variant="anony-xlg-bold">
				Lucas
			</Text>

			<div className="inline-flex justify-center items-center flex-col gap-3.25 mb-3.75">
				<div className="flex justify-center items-center gap-0.5">
					<Text as="h2" variant="anony-xsm">
						Full-Stack Developer
					</Text>
					<Circle />
				</div>
				<Text as="h2" variant="anony-xsm">
					Learning, Building and gaining skills with every line code
				</Text>
			</div>
			<ContactLinks />
			<div className="flex flex-col justify-center items-center gap-3.5">
				<Text as="h3" variant="anony-sm-bold">
					Experiences With
				</Text>
				<LanguageIcons />
			</div>
		</section>
	);
}
