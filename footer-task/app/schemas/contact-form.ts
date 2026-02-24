import { z } from "zod";

export const contactFormSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(2, "Min. 2 znaky")
        .max(50, "Příliš dlouhé"),

    lastName: z
        .string()
        .trim()
        .min(2, "Min. 2 znaky")
        .max(50, "Příliš dlouhé"),

    phone: z
        .string()
        .e164("Neplatné číslo"),

    email: z
        .string()
        .trim()
        .email("Neplatný e-mail"),

    message: z
        .string()
        .trim()
        .max(1000, "Příliš dlouhá")
        .optional(),

    apartmentType: z
        .array(z.enum(["1+KK", "2+KK", "3+KK", "4+KK"]))
        .optional(),

    newsletter: z.boolean().optional().default(false),

    agreeToPolicy: z.literal(true, {
        message: "Vyžadováno",
    }),
});

export type ContactForm = z.infer<typeof contactFormSchema>;