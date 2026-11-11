import { z } from "zod";

export const leadSchema = z.object({
  services: z.array(z.string()).min(1, "Please select at least one service."),
  goal: z.string().min(1, "Please select your primary goal."),
  businessType: z.string().min(1, "Please select your business type."),
  city: z.string().trim().min(2, "Please enter your city."),
  launchTiming: z.string().min(1, "Please select your target launch timeframe."),
  template: z.string().optional(),
  name: z.string().trim().min(2, "Please enter your full name."),
  countryCode: z.string().default("+91"),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9\s-]{7,15}$/, "Please enter a valid phone number."),
  hp: z.string().max(0, "Invalid submission.").optional().or(z.literal("")),
});

export type LeadPayload = z.infer<typeof leadSchema>;

