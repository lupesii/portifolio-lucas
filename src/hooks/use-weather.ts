import { useQuery } from "@tanstack/react-query";
import {
	type WeatherApiResponse,
	weatherSchema,
} from "../types/weather-api-response";

export function useWeather() {
	return useQuery({
		queryKey: ["get-weather"],
		queryFn: async (): Promise<WeatherApiResponse> => {
			const response = await fetch(
				`https://api.weatherapi.com/v1/current.json?key=2cf916eb7c844ae7889222313250611&q=Sao Jose dos Campos&aqi=no`,
			);
			const result = await response.json();
			const parsed: WeatherApiResponse = weatherSchema.parse(result);
			return {
				current: {
					condition: {
						text: parsed.current.condition.text,
						icon: parsed.current.condition.icon,
					},
					wind_kph: parsed.current.wind_kph,
					humidity: parsed.current.humidity,
					temp_c: parsed.current.temp_c,
				},
				location: {
					name: parsed.location.name,
				},
			};
		},
	});
}
