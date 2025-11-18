import z from "zod/v4";

export const weatherSchema = z.object({
	current: z.object({
		temp_c: z.number(),
		humidity: z.number(),
		wind_kph: z.number(),
		condition: z.object({
			text: z.string(),
			icon: z.string(),
		}),
	}),
	location: z.object({
		name: z.string(),
	}),
});

export type WeatherApiResponse = z.infer<typeof weatherSchema>;
