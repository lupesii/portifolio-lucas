import GithubIcon from "../assets/icons/languages/github.svg?react";
import mailIcon from "../assets/icons/mail.svg?react";
import Container from "../components/container";
import Form from "../components/form";
import Icon from "../components/icon";
import IconLink from "../components/icon-link";

import Text from "../components/text";
import Title from "../components/title";

export default function Contact() {
	return (
		<Container
			as="section"
			className="grid grid-cols-[repeat(2,max-content)] grid-rows-[repeat(2,max-content)] justify-center content-center gap-7.5 h-auto"
		>
			<div className="space-y-5 ">
				<Title>Contact me</Title>
				<Text
					as="p"
					variant="none"
					color="muted"
					className="font-mono font-semibold text-[22px]"
				>
					Got an idea in mind or just wanna say hi? Let’s chat and see if we can
					build something awesome together!
				</Text>
			</div>
			<div className="flex gap-37.5 w-full row-start-2 row-end-auto col-span-2">
				<Form />
				<div className="space-y-6.5">
					<div>
						<Text as="h1" variant="anony-md-bold" className="mb-2.5" trace>
							Let's connect
						</Text>
						<Text
							as="p"
							variant="none"
							color="muted"
							className="font-mono font-semibold text-[18px] indent-3.75"
						>
							You can also find me
						</Text>
					</div>
					<div className="flex gap-2.5 items-center">
						<IconLink
							icon={GithubIcon}
							className="inline-flex bg-cinza-400 p-4.5 rounded-full"
						/>
						<IconLink
							icon={GithubIcon}
							className="inline-flex bg-cinza-400 p-4.5 rounded-full"
						/>
						<IconLink
							icon={GithubIcon}
							className="inline-flex bg-cinza-400 p-4.5 rounded-full"
						/>
						<IconLink
							icon={GithubIcon}
							className="inline-flex bg-cinza-400 p-4.5 rounded-full"
						/>
					</div>
					<Text
						as="p"
						variant="none"
						color="muted"
						className="font-mono font-semibold text-[18px] indent-3.75"
					>
						Or reach me directly at:
					</Text>
					<Text
						as="p"
						variant="none"
						className="flex items-center gap-[5px] font-mono font-semibold text-[16px] ml-3.75 mt-3.5"
					>
						<Icon svg={mailIcon} />
						lucaspereira.dev@proton.me
					</Text>
				</div>
			</div>
		</Container>
	);
}
