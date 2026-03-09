import { cva, type VariantProps } from "cva";
import HumidityIcon from "../assets/icons/weather/humidity.svg?react";
import ThermometerIcon from "../assets/icons/weather/thermometer.svg?react";
import WindIcon from "../assets/icons/weather/wind.svg?react";
import { useWeather } from "../hooks/use-weather";
import Icon from "./icon";
import Text from "./text";

export const weatherCardVariants = cva(
	`flex flex-col justify-center items-center gap-2 w-max h-ma
	p-2 rounded-lg bg-preto border-cinza-300 border pointer-events-none
	transition-all duration-200`,
	{
		variants: {
			visibility: {
				false: "opacity-0",
				true: "opacity-100",
			},
		},
		defaultVariants: {
			visibility: false,
		},
	},
);

interface WeatherCardProps
	extends VariantProps<typeof weatherCardVariants>,
		React.ComponentProps<"div"> {}

export default function WeatherCard({
	visibility,
	className,
}: WeatherCardProps) {
	const { data } = useWeather();

	return (
		<aside className={weatherCardVariants({ visibility, className })}>
			<Text variant="albert-sm" bold>
				S. J. Dos Campos, SP
			</Text>
			<div className="flex items-center gap-1">
				<Icon svg={ThermometerIcon} />
				<Text variant="anony-xsm" bold className="text-xl">
					{data?.current.temp_c}°C
				</Text>
			</div>
			<Text variant="anony-sm">{data?.current.condition.text}</Text>
			<div className="flex flex-col gap-1 self-start">
				<div className="flex items-center gap-1">
					<Icon svg={HumidityIcon} size="none" className="w-4 h-4" />
					<Text variant="none" className="font-mono text-[13px]">
						{data?.current.humidity}% humidity
					</Text>
				</div>
				<div className="flex items-center gap-2">
					<Icon svg={WindIcon} size="none" className="w-4 h-4" />
					<Text variant="none" className="font-mono text-[13px]">
						{data?.current.wind_kph} km/h
					</Text>
				</div>
			</div>
		</aside>
	);
}
