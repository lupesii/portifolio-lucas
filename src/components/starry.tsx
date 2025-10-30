import type { Container, ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

export default function Starry() {
	const [init, setInit] = useState(false);

	useEffect(() => {
		if (!init) {
			initParticlesEngine(async (engine) => {
				await loadSlim(engine);
			}).then(() => setInit(true));
		}
	}, [init]);

	const particlesLoaded = async (container?: Container): Promise<void> => {
		if (!container) return;
		console.log(container);
	};

	const options: ISourceOptions = useMemo(
		() => ({
			fpsLimit: 60,
			particles: {
				number: {
					value: 500,
					density: { enable: true, area: 800 },
				},
				color: { value: "#fff" },
				shape: { type: "circle" },
				opacity: {
					value: 0.5,
					random: true,
					animation: {
						enable: true,
						speed: 0.5,
						minimumValue: 0.1,
						sync: false,
					},
				},
				size: {
					value: 1.5,
					random: true,
				},
				links: { enable: false },
				move: {
					enable: true,
					speed: 0.5,
					direction: "none",
					random: true,
					straight: false,
					outModes: "out",
				},
			},
			interactivity: {
				events: {
					onHover: { enable: false },
					onClick: { enable: false },
					resize: {},
				},
			},
			detectRetina: true,
			background: { color: "#060606" },
		}),
		[],
	);

	if (!init) return <div style={{ background: "#060606", height: "100vh" }} />;

	return (
		<Particles
			id="tsparticles"
			particlesLoaded={particlesLoaded}
			options={options}
			className="relative z-[-1]"
		/>
	);
}
