"use client"; // КРИТИЧЕСКИ ВАЖНО: Формы в Next.js должны быть клиентскими компонентами, так как они работают с состоянием (вводом пользователя)

export default function LeadForm() {
    return (
        <form className="flex flex-col gap-8 w-full">

            {/* First raw: name + surname */}
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col w-full">
                    <label className="font-arial text-sm mb-2 text-daramis-darkest opacity-60">Křestní jméno *</label>
                    <input
                        type="text"
                        placeholder="Vaše jméno"
                        className="bg-transparent border-b border-daramis-darkest py-2 font-arial outline-none focus:border-daramis-green transition-colors"
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label className="font-arial text-sm mb-2 text-daramis-darkest opacity-60">Příjmení</label>
                    <input
                        type="text"
                        placeholder="Vaše příjmení"
                        className="bg-transparent border-b border-daramis-darkest py-2 font-arial outline-none focus:border-daramis-green transition-colors"
                    />
                </div>
            </div>

            {/* Second raw: email + phone number */}
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col w-full">
                    <label className="font-arial text-sm mb-2 text-daramis-darkest opacity-60">Telefonní číslo</label>
                    <input
                        type="tel"
                        placeholder="+420"
                        className="bg-transparent border-b border-daramis-darkest py-2 font-arial outline-none focus:border-daramis-green transition-colors"
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label className="font-arial text-sm mb-2 text-daramis-darkest opacity-60">E-mail *</label>
                    <input
                        type="email"
                        placeholder="Váš e-mail"
                        className="bg-transparent border-b border-daramis-darkest py-2 font-arial outline-none focus:border-daramis-green transition-colors"
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
                <label className="font-arial text-sm mb-2 text-daramis-creamy opacity-60">O jaký byt máte zájem?</label>
                {/* appearance-none убирает стандартную страшную стрелочку браузера */}
                <select className="bg-transparent border-b border-daramis-creamy py-2 font-arial outline-none focus:border-daramis-yellow transition-colors text-daramis-creamy cursor-pointer">
                    {/* Опции внутри списка. Делаем текст темным, так как список выпадает на белом фоне системного UI */}
                    <option value="" className="text-daramis-darkest">Vyberte z možností</option>
                    <option value="1+kk" className="text-daramis-darkest">1+KK</option>
                    <option value="2+kk" className="text-daramis-darkest">2+KK</option>
                    <option value="3+kk" className="text-daramis-darkest">3+KK</option>
                    <option value="4+kk" className="text-daramis-darkest">4+KK</option>
                </select>
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
                type="button"
                className="bg-daramis-darkest text-daramis-white font-nudista text-xl py-4 px-10 mt-4 w-fit hover:bg-daramis-green transition-colors"
            >
                ODESLAT
            </button>

        </form>
    );
}