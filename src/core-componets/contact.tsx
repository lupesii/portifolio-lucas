import ContactIcons from "../components/contact-icons";
import Container from "../components/container";
import Form from "../components/form";
import Text from "../components/text";
import Title from "../components/title";

export default function Contact() {
	return (
		<Container
			as="section"
			className="flex flex-col justify-center gap-y-7.5 my-10 lg:my-0"
		>
			<div className="space-y-5 lg:w-1/2">
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
			<div className="flex flex-col lg:flex-row gap-10">
				<Form />
				<ContactIcons />
			</div>
		</Container>
	);
}
