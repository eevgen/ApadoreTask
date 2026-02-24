"use server";

import { contactFormSchema } from "@/app/schemas/contact-form";

export async function submitLead(formData: FormData) {

    const result = contactFormSchema.safeParse({
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        message: formData.get("message"),
        apartmentType: formData.getAll("apartmentType"),
        newsletter: formData.get("newsletter") === "on",
        agreeToPolicy: formData.get("agreeToPolicy") === "on",
    });

    if(!result.success) {
        const { fieldErrors, formErrors } = result.error.flatten();

        return  {
            success: false as const,
            fieldErrors,
            formErrors,
        };
    }

    const data = result.data;
    // logic with data...

    return {
        success: true as const,
    };
}
