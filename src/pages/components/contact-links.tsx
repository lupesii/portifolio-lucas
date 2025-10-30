import GithubIcon from "../../assets/icons/Github.svg?react";
import LinkedinIcon from "../../assets/icons/Linkedin.svg?react";
import EmailIcon from "../../assets/icons/mail.svg?react";
import IconLink from "../../components/icon-link";

export default function ContactLinks() {
	return (
		<div className="flex justify-center items-center gap-3.75 mb-7">
			<IconLink
				icon={EmailIcon}
				aria_label="Endereço de email"
				url="mailto:lucaspereira.dev@proton.me?subject=Contato%20do%20portfólio&body=Olá%20Lucas,%20tudo%20bem?"
			/>
			<IconLink
				icon={GithubIcon}
				aria_label="Perfil do github"
				url="https://github.com/lupesii"
			/>
			<IconLink
				icon={LinkedinIcon}
				aria_label="Perfil do Linkedin"
				url="https://www.linkedin.com/in/lucas-silva-e-pereira/"
			/>
		</div>
	);
}
