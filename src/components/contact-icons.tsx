import GithubIcon from "../assets/icons/languages/github.svg?react";
import mailIcon from "../assets/icons/mail.svg?react";
import Icon from "./icon";
import IconLink from "./icon-link";
import Text from "./text";

export default function ContactIcons() {
	return (
		<div className="space-y-6.5">
			<div>
				<Text as="h1" variant="anony-md" bold className="mb-2.5" trace>
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
	);
}
