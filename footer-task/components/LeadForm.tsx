"use client";

import { useState } from "react";
import { submitLead } from "@/app/actions/submitLead";
import FormTextField from "@/components/FormTextField";

const inputClass =
    "bg-transparent border border-primary-creamy rounded-[4px] px-3 py-2 font-arial text-primary-white outline-none " +
    "hover:border-primary-accent/70 focus:border-primary-accent transition-colors " +
    "placeholder:text-primary-white/50 w-full";

const errorInputClass =
    "bg-transparent border border-error rounded-[4px] px-3 py-2 font-arial text-primary-creamy outline-none " +
    "focus:border-error transition-colors placeholder:text-primary-creamy/30 w-full";

type FieldErrors = {
    [key: string]: string[] | undefined;
};

export default function LeadForm() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
        apartmentType: "",
        newsletter: false,
        agreeToPolicy: false,
    });

    const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
    const [formErrors, setFormErrors] = useState<string[]>([]);

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");



    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        fieldName: string
    ) => {
        const value = e.target.value;

        setFormData((prev) => ({
            ...prev,
            [fieldName]: value,
        }));

        // clearing error when user starts typing
        if (fieldErrors[fieldName]) {
            setFieldErrors((prev) => ({
                ...prev,
                [fieldName]: undefined,
            }));
        }
    };

    const submitToMockBackend = async function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random(); //random number between 0 and 1
                if (random < 0.1) {
                    reject(new Error("Simulated backend error"));
                } else {
                    resolve("Success");
                }
            }, 1500);
        });
    }

    const handleRadioChange = (value: string) => {
        setFormData((prev) => ({
            ...prev,
            apartmentType: value,
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
        setFormData((prev) => ({
            ...prev,
            [fieldName]: e.target.checked,
        }));

        //clearing error when user interacts with checkbox
        if (fieldErrors[fieldName]) {
            setFieldErrors((prev) => ({
                ...prev,
                [fieldName]: undefined,
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setFieldErrors({});
        setFormErrors([]);
        setStatus("loading");

        try {
            const form = new FormData();
            form.append("firstName", formData.firstName);
            form.append("lastName", formData.lastName);
            form.append("phone", formData.phone);
            form.append("email", formData.email);
            form.append("message", formData.message);

            if (formData.apartmentType) {
                form.append("apartmentType", formData.apartmentType);
            }

            if (formData.newsletter) {
                form.append("newsletter", "on");
            }

            if (formData.agreeToPolicy) {
                form.append("agreeToPolicy", "on");
            }

            const result = await submitLead(form);

            if (!result.success) {
                setFieldErrors(result.fieldErrors || {});
                setFormErrors(result.formErrors || []);
                setStatus("error");
            } else {
                await submitToMockBackend();
                setStatus("success");
            }
        } catch (error) {
            setFormErrors(["Něco se pokazilo. Zkuste to prosím znovu."]);
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="flex flex-col justify-center items-start h-full gap-4">
                <h2 className="font-nudista text-primary-creamy uppercase" style={{ fontSize: "32px" }}>
                    Děkujeme za odeslání formuláře!
                </h2>
                <p className="font-arial text-primary-creamy/80" style={{ fontSize: "var(--text-paragraph)", lineHeight: "var(--leading-paragraph)" }}>
                    Brzy se vám ozveme.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">

            {/* global errors */}
            {formErrors.length > 0 && (
                <div className="bg-error/10 border border-error rounded-[4px] p-3">
                    {formErrors.map((error, idx) => (
                        <p key={idx} className="font-arial text-error" style={{ fontSize: "var(--text-small)" }}>
                            • {error}
                        </p>
                    ))}
                </div>
            )}

            {/* Row 1: Křestní jméno + Příjmení */}
            <div className="flex flex-col md:flex-row gap-5">
                {/* Křestní jméno */}
                <FormTextField label="Křestní jméno *" error={fieldErrors.firstName?.[0]}>
                    <input
                        name="firstName"
                        type="text"
                        placeholder="Vaše jméno"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange(e, "firstName")}
                        className={fieldErrors.firstName ? errorInputClass : inputClass}
                    />
                </FormTextField>

                {/* Příjmení */}
                <FormTextField label="Příjmení *" error={fieldErrors.lastName?.[0]}>
                    <input
                        name="lastName"
                        type="text"
                        placeholder="Vaše příjmení"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange(e, "lastName")}
                        className={fieldErrors.lastName ? errorInputClass : inputClass}
                    />
                </FormTextField>
            </div>

            {/* Row 2: Telefonní číslo (full width) */}
            <FormTextField label="Telefonní číslo *" error={fieldErrors.phone?.[0]}>
                <input
                    type="tel"
                    name="phone"
                    placeholder="+420 XXX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => handleInputChange(e, "phone")}
                    className={fieldErrors.phone ? errorInputClass : inputClass}
                />
            </FormTextField>

            {/* Row 3: E-mail (full width) */}
            <FormTextField label="E-mail *" error={fieldErrors.email?.[0]}>
                <input
                    type="email"
                    name="email"
                    placeholder="Váš e-mail"
                    value={formData.email}
                    onChange={(e) => handleInputChange(e, "email")}
                    className={fieldErrors.email ? errorInputClass : inputClass}
                />
            </FormTextField>

            {/* Row 4: Zpráva */}
            <FormTextField label="Zpráva" error={fieldErrors.message?.[0]}>
                <textarea
                    name="message"
                    placeholder="Jak vám můžeme pomoci?"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => handleInputChange(e, "message")}
                    className={
                        (fieldErrors.message ? errorInputClass : inputClass) +
                        " resize-none"
                    }
                />
            </FormTextField>

            {/* Row 5: Typ bytu */}
            <div className="flex flex-col w-full gap-2.5">
                <label className="font-arial text-primary-white"
                       style={{
                           fontSize: "var(--text-small)",
                           lineHeight: "var(--leading-small)"
                       }}
                >
                    O jaký byt máte zájem?
                </label>
                <div className="flex w-fit mt-1 border border-primary-white rounded-[4px] p-1 gap-1">
                    {(["1+KK", "2+KK", "3+KK", "4+KK"] as const).map((option) => (
                        <label
                            key={option}
                            className={
                                "cursor-pointer rounded-[4px] px-4 py-1.5 font-arial transition-colors " +
                                (formData.apartmentType === option
                                    ? "bg-primary-white text-primary-darkest"
                                    : "text-primary-white hover:bg-primary-white/10")
                            }
                            style={{
                                fontSize: "var(--text-small)",
                                lineHeight: "var(--leading-small)"
                            }}
                        >
                            <input
                                type="radio"
                                name="apartmentType"
                                value={option}
                                className="hidden"
                                checked={formData.apartmentType === option}
                                onChange={() => handleRadioChange(option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            </div>



            {/* Row 6: Checkboxes */}
            <div className="flex flex-col gap-3">
                <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={(e) => handleCheckboxChange(e, "newsletter")}
                        className="mt-0.5 w-4 h-4 accent-primary-accent cursor-pointer shrink-0"
                    />
                    <span className="font-arial text-primary-white group-hover:text-primary-creamy transition-colors" style={{ fontSize: "var(--text-small)", lineHeight: "var(--leading-small)" }}>
                        Chci být součástí newsletteru Daramis a získávat všechny novinky a informace.
                    </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                        type="checkbox"
                        name="agreeToPolicy"
                        checked={formData.agreeToPolicy}
                        onChange={(e) => handleCheckboxChange(e, "agreeToPolicy")}
                        className="mt-0.5 w-4 h-4 accent-primary-accent cursor-pointer shrink-0"
                    />
                    <span className="font-arial text-primary-white group-hover:text-primary-creamy transition-colors" style={{ fontSize: "var(--text-small)", lineHeight: "var(--leading-small)" }}>
                        Odesláním formuláře souhlasíte se zpracováním{" "}
                        <a href="#" className="underline hover:text-primary-accent transition-colors">
                            zásad ochrany osobních údajů
                        </a>
                        .
                    </span>
                </label>

                {/* error for GDPR checkbox */}
                {fieldErrors.agreeToPolicy && (
                    <span className="font-arial text-error text-xs ml-7" style={{ fontSize: "var(--text-small)" }}>
                        {fieldErrors.agreeToPolicy[0]}
                    </span>
                )}
            </div>

            {/* Row 7: Submit button + inline error */}
            <div className="flex items-center gap-6 mt-2">
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className={`font-nudista uppercase tracking-widest py-3 px-8 rounded-full transition-all ${
                        status === "loading"
                            ? "bg-primary-creamy-2 text-primary-darkest cursor-not-allowed"
                            : "bg-primary-accent text-primary-darkest hover:brightness-110 active:scale-95"
                    }`}
                    style={{ fontSize: "var(--text-small)", lineHeight: "var(--leading-small)" }}
                >
                    {status === "loading" ? "Odesílám..." : "Odeslat"}
                </button>

                {status === "error" && (
                    <span className="font-arial text-error" style={{ fontSize: "var(--text-small)", lineHeight: "var(--leading-small)" }}>
                        Něco se pokazilo. Zkuste to prosím znovu.
                    </span>
                )}
            </div>

        </form>
    );
}
