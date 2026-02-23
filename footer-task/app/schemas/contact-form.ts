import { z } from "zod";

export const contactFormSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(2, "Jméno musí mít alespoň 2 znaky")
        .max(50, "Jméno je příliš dlouhé"),

    lastName: z
        .string()
        .trim()
        .min(2, "Příjmení musí mít alespoň 2 znaky")
        .max(50, "Příjmení je příliš dlouhé"),

    phone: z
        .string()
        .e164("Zadejte platné telefonní číslo"),

    email: z
        .string()
        .trim()
        .email("Zadejte platnou e-mailovou adresu"),

    message: z
        .string()
        .trim()
        .max(1000, "Zpráva je příliš dlouhá")
        .optional(),

    apartmentType: z
        .array(z.enum(["1+KK", "2+KK", "3+KK", "4+KK"]))
        .optional(),

    newsletter: z.boolean().optional().default(false),

    agreeToPolicy: z.literal(true, {
        message: "Musíte souhlasit se zpracováním osobních údajů",
    }),
});

export type ContactForm = z.infer<typeof contactFormSchema>;