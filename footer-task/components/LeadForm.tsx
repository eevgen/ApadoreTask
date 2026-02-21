"use client"; // КРИТИЧЕСКИ ВАЖНО: Формы в Next.js должны быть клиентскими компонентами, так как они работают с состоянием (вводом пользователя)


import React from "react";

export default function LeadForm() {

    const [flatType, setFlatType] = React.useState<"1+KK" | "2+KK" | "3+KK" | "4+KK" | "">("");

    return (
        <form className="flex flex-col gap-8 w-full">

            {/* First raw: name + surname */}
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col w-full">
                    <label className="font-arial text-sm mb-2 text-daramis-creamy opacity-60">Křestní jméno *</label>
                    <input
                        type="text"
                        placeholder="Vaše jméno"
                        className="bg-transparent border-b border-daramis-creamy py-2 font-arial outline-none focus:border-daramis-yellow transition-colors placeholder:text-daramis-creamy placeholder:opacity-30"
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label className="font-arial text-sm mb-2 text-daramis-creamy opacity-60">Příjmení</label>
                    <input
                        type="text"
                        placeholder="Vaše příjmení"
                        className="bg-transparent border-b border-daramis-creamy py-2 font-arial outline-none focus:border-daramis-yellow transition-colors placeholder:text-daramis-creamy placeholder:opacity-30"
                    />
                </div>
            </div>

            {/* Second raw: email + phone number */}
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col w-full">
                    <label className="font-arial text-sm mb-2 text-daramis-creamy opacity-60">Telefonní číslo</label>
                    <input
                        type="tel"
                        placeholder="+420"
                        className="bg-transparent border-b border-daramis-creamy py-2 font-arial outline-none focus:border-daramis-yellow transition-colors placeholder:text-daramis-creamy placeholder:opacity-30"
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label className="font-arial text-sm mb-2 text-daramis-creamy opacity-60">E-mail *</label>
                    <input
                        type="email"
                        placeholder="Váš e-mail"
                        className="bg-transparent border-b border-daramis-creamy py-2 font-arial outline-none focus:border-daramis-yellow transition-colors placeholder:text-daramis-creamy placeholder:opacity-30"
                    />
                </div>
            </div>

            {/* Third raw: Zpráva */}
            <div className="flex flex-col w-full">
                <label className="font-arial text-sm mb-2 text-daramis-creamy opacity-60">Zpráva</label>
                <textarea
                    placeholder="Jak vám můžeme pomoci?"
                    rows={1}
                    className="bg-transparent border-b border-daramis-creamy py-2 font-arial outline-none focus:border-daramis-yellow transition-colors placeholder:text-daramis-creamy placeholder:opacity-30 resize-none"
                ></textarea>
            </div>

            {/* Fourth raw: Select */}
            <div className="flex flex-col w-full">
                <label className="font-arial text-sm mb-2 text-daramis-creamy opacity-60">
                    O jaký byt máte zájem?
                </label>

                <div className="flex flex-wrap gap-3">
                    {/* First option "1+KK" */}
                    <input
                        type="radio"
                        id="flat-1kk"
                        name="flatType"
                        value="1+KK"
                        className="hidden"
                        checked={flatType === "1+KK"}
                        onChange={() => setFlatType("1+KK")}
                    />

                    <label
                        htmlFor="flat-1kk"
                        className={
                            "cursor-pointer rounded-full border px-4 py-2 font-arial text-sm transition-colors " +
                            (flatType === "1+KK"
                                ? "bg-daramis-yellow text-daramis-darkest border-daramis-yellow"
                                : "border-daramis-creamy text-daramis-creamy/80 hover:border-daramis-yellow")
                        }
                    >
                        1+KK
                    </label>

                    {/* Second option "2+KK" */}
                    <input
                        type="radio"
                        id="flat-2kk"
                        name="flatType"
                        value="2+KK"
                        className="hidden"
                        checked={flatType === "2+KK"}
                        onChange={() => setFlatType("2+KK")}
                    />
                    <label
                        htmlFor="flat-2kk"
                        className={
                            "cursor-pointer rounded-full border px-4 py-2 font-arial text-sm transition-colors " +
                            (flatType === "2+KK"
                                ? "bg-daramis-yellow text-daramis-darkest border-daramis-yellow"
                                : "border-daramis-creamy text-daramis-creamy/80 hover:border-daramis-yellow")
                        }
                    >
                        2+KK
                    </label>

                    {/* Third option "3+KK" */}
                    <input
                        type="radio"
                        id="flat-3kk"
                        name="flatType"
                        value="3+KK"
                        className="hidden"
                        checked={flatType === "3+KK"}
                        onChange={() => setFlatType("3+KK")}
                    />
                    <label
                        htmlFor="flat-3kk"
                        className={
                            "cursor-pointer rounded-full border px-4 py-2 font-arial text-sm transition-colors " +
                            (flatType === "3+KK"
                                ? "bg-daramis-yellow text-daramis-darkest border-daramis-yellow"
                                : "border-daramis-creamy text-daramis-creamy/80 hover:border-daramis-yellow")
                        }
                    >
                        3+KK
                    </label>

                    {/* Fourth option "4+KK" */}
                    <input
                        type="radio"
                        id="flat-4kk"
                        name="flatType"
                        value="4+KK"
                        className="hidden"
                        checked={flatType === "4+KK"}
                        onChange={() => setFlatType("4+KK")}
                    />
                    <label
                        htmlFor="flat-4kk"
                        className={
                            "cursor-pointer rounded-full border px-4 py-2 font-arial text-sm transition-colors " +
                            (flatType === "4+KK"
                                ? "bg-daramis-yellow text-daramis-darkest border-daramis-yellow"
                                : "border-daramis-creamy text-daramis-creamy/80 hover:border-daramis-yellow")
                        }
                    >
                        4+KK
                    </label>
                </div>
            </div>

            {/* Fifth raw: checkboxes */}
            <div className="flex flex-col gap-4 mt-2">
                <label className="flex items-start gap-4 cursor-pointer group">
                    <input type="checkbox" className="mt-1 w-5 h-5 accent-daramis-yellow cursor-pointer" />
                    <span className="font-arial text-xs text-daramis-creamy opacity-60 group-hover:opacity-100 transition-opacity leading-relaxed">
            Chci být součástí newsletteru Daramis a získávat všechny novinky a informace.
          </span>
                </label>
                <label className="flex items-start gap-4 cursor-pointer group">
                    <input type="checkbox" className="mt-1 w-5 h-5 accent-daramis-yellow cursor-pointer" />
                    <span className="font-arial text-xs text-daramis-creamy opacity-60 group-hover:opacity-100 transition-opacity leading-relaxed">
            Odesláním formuláře souhlasím se zpracováním osobních údajů v souladu se zásadami ochrany osobních údajů.
          </span>
                </label>
            </div>

            {/* Send button  */}
            <button
                type="submit"
                className="bg-daramis-yellow text-daramis-darkest font-nudista text-xl py-4 px-10 mt-4 w-fit hover:bg-daramis-green transition-colors hover:opacity-90"
            >
                ODESLAT
            </button>

        </form>
    );
}