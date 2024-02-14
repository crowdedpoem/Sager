import { z } from "zod";

const listSchema = z.object({
  description: z.string().min(2, { message: "enter a longer title" }).max(100),
});

export const singleExperience = z.object({
  title: z.string().min(2, { message: "enter a longer title" }).max(100),
  description: z.string().min(2, { message: "more words" }),
  // validating dates on the ui DatePickers using maxDate & minDate
  startDate: z.any(),
  endDate: z.any(),
  pros: z.array(listSchema),
  cons: z.array(listSchema),
  dayEvents: z.array(listSchema)
});

export const formSchema = z.object({
  tag: z.string(),
  experience: z.array(singleExperience),
});
