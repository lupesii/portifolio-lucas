import GithubIcon from "../assets/icons/languages/github.svg?react";
import LinkedinIcon from "../assets/icons/languages/linkedin.svg?react";
import EmailIcon from "../assets/icons/mail.svg?react";
import IconLink from "./icon-link";

export default function ContactLinks() {
	return (
		<div className="flex justify-center items-center gap-3.75 mb-7">
			<IconLink
				icon={EmailIcon}
				aria-label="Endereço de email"
				href="mailto:lucaspereira.dev@proton.me?subject=Contato%20do%20portfólio&body=Olá%20Lucas,%20tudo%20bem?"
			/>
			<IconLink
				icon={GithubIcon}
				aria-label="Perfil do github"
				href="https://github.com/lupesii"
			/>
			<IconLink
				icon={LinkedinIcon}
				aria-label="Perfil do Linkedin"
				href="https://www.linkedin.com/in/lucas-silva-e-pereira/"
			/>
		</div>
	);
}
