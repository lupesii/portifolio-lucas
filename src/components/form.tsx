import type { FormEvent } from "react";
import SendIcon from "../assets/icons/send.svg?react";
import Icon from "./icon";
import InputBox from "./input-box";
import Text from "./text";

export default function Form() {
	function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		alert("Calma, falta programar");
	}

	return (
		<form
			onSubmit={handleSubmitForm}
			className="bg-cinza-400 border border-azul space-y-6.25 py-6 px-5 rounded-5 h-fit lg:min-w-[700px]"
		>
			<Text as="h1" variant="anony-md" bold className="mb-6.25" trace>
				Lets build something together!
			</Text>

			<div className="flex flex-col md:flex-row items-center gap-5">
				<InputBox id="Name" placeholder="Your Name" className="w-full" />
				<InputBox
					id="Email"
					placeholder="Your email address"
					className="w-full"
				/>
			</div>
			<InputBox id="Subject" placeholder="Subject of your message" />
			<InputBox
				as="textarea"
				id="Message"
				placeholder="What I can help you with?"
			/>

			<button
				type="submit"
				className="flex items-center justify-center gap-3 bg-azul w-full p-5 rounded-5"
			>
				<Icon svg={SendIcon} />
				<Text variant="anony-sm" bold>
					Send Message
				</Text>
			</button>
		</form>
	);
}
