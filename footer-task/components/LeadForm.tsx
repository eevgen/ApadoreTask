"use client";

import { useState } from "react";

const inputClass =
    "bg-transparent border border-primary-creamy/40 rounded-[4px] px-3 py-2 font-arial text-primary-creamy outline-none " +
    "hover:border-primary-accent/70 focus:border-primary-accent transition-colors " +
    "placeholder:text-primary-creamy/30 w-full";

const errorInputClass =
    "bg-transparent border border-error rounded-[4px] px-3 py-2 font-arial text-primary-creamy outline-none " +
    "focus:border-error transition-colors placeholder:text-primary-creamy/30 w-full";

const inputStyle = { fontSize: "var(--text-small)", lineHeight: "var(--leading-small)" };

const labelClass = "font-arial text-primary-creamy/60 mb-1";

export default function LeadForm() {
    const [flatType, setFlatType] = useState<"1+KK" | "2+KK" | "3+KK" | "4+KK" | "">("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [emailError, setEmailError] = useState(false);

    const submitToMockBackend = async function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.1) {
                    reject(new Error("Simulated backend error"));
                } else {
                    resolve("Success");
                }
            }, 1500);
        });
    };

    const handleSubmit = async function (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setEmailError(false);
        setStatus("loading");

        try {
            await submitToMockBackend();
            setStatus("success");
        } catch {
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

            {/* Row 1: Křestní jméno + Příjmení */}
            <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col w-full">
                    <label className={labelClass} style={inputStyle}>Křestní jméno *</label>
                    <input
                        type="text"
                        placeholder="Vaše jméno"
                        className={inputClass}
                        style={inputStyle}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label className={labelClass} style={inputStyle}>Příjmení *</label>
                    <input
                        type="text"
                        placeholder="Vaše příjmení"
                        className={inputClass}
                        style={inputStyle}
                    />
                </div>
            </div>

            {/* Row 2: Telefonní číslo (full width) */}
            <div className="flex flex-col w-full">
                <label className={labelClass} style={inputStyle}>Telefonní číslo *</label>
                <input
                    type="tel"
                    placeholder="Vaše telefonní číslo"
                    className={inputClass}
                    style={inputStyle}
                />
            </div>

            {/* Row 3: E-mail (full width) */}
            <div className="flex flex-col w-full">
                <div className="flex items-center justify-between mb-1">
                    <label className={labelClass + " mb-0"} style={inputStyle}>E-mail *</label>
                    {emailError && (
                        <span className="font-arial text-error" style={inputStyle}>
                            Hláška erroru
                        </span>
                    )}
                </div>
                <input
                    type="email"
                    placeholder="Váš e-mail"
                    className={emailError ? errorInputClass : inputClass}
                    style={inputStyle}
                />
            </div>

            {/* Row 4: Zpráva */}
            <div className="flex flex-col w-full">
                <label className={labelClass} style={inputStyle}>Zpráva</label>
                <textarea
                    placeholder="Jak vám můžeme pomoci?"
                    rows={3}
                    className={
                        "bg-transparent border border-primary-creamy/40 rounded-[4px] px-3 py-2 font-arial text-primary-creamy outline-none " +
                        "hover:border-primary-accent/70 focus:border-primary-accent transition-colors " +
                        "placeholder:text-primary-creamy/30 resize-none w-full"
                    }
                    style={inputStyle}
                />
            </div>

            {/* Row 5: Typ bytu */}
            <div className="flex flex-col w-full">
                <label className={labelClass} style={inputStyle}>O jaký byt máte zájem?</label>
                <div className="flex flex-wrap gap-2 mt-1">
                    {(["1+KK", "2+KK", "3+KK", "4+KK"] as const).map((option) => (
                        <label
                            key={option}
                            className={
                                "cursor-pointer border rounded-[4px] px-4 py-1.5 font-arial transition-colors " +
                                (flatType === option
                                    ? "bg-primary-accent text-primary-darkest border-primary-accent"
                                    : "border-primary-creamy/40 text-primary-creamy/80 hover:border-primary-accent/70")
                            }
                            style={inputStyle}
                        >
                            <input
                                type="radio"
                                name="flatType"
                                value={option}
                                className="hidden"
                                checked={flatType === option}
                                onChange={() => setFlatType(option)}
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
                        className="mt-0.5 w-4 h-4 accent-primary-accent cursor-pointer shrink-0"
                    />
                    <span className="font-arial text-primary-creamy/60 group-hover:text-primary-creamy transition-colors" style={inputStyle}>
                        Chci být součástí newsletteru Daramis a získávat všechny novinky a informace.
                    </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                        type="checkbox"
                        className="mt-0.5 w-4 h-4 accent-primary-accent cursor-pointer shrink-0"
                    />
                    <span className="font-arial text-primary-creamy/60 group-hover:text-primary-creamy transition-colors" style={inputStyle}>
                        Odesláním formuláře souhlasíte se zpracováním{" "}
                        <a href="#" className="underline hover:text-primary-accent transition-colors">
                            zásad ochrany osobních údajů
                        </a>
                        .
                    </span>
                </label>
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
                    style={inputStyle}
                >
                    {status === "loading" ? "Odesílám..." : "Odeslat"}
                </button>

                {status === "error" && (
                    <span className="font-arial text-error" style={inputStyle}>
                        Něco se pokazilo. Zkuste to prosím znovu.
                    </span>
                )}
            </div>

        </form>
    );
}
