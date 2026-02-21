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

            {/* Send button */}
            <button
                type="button"
                className="bg-daramis-darkest text-daramis-white font-nudista text-xl py-4 px-10 mt-4 w-fit hover:bg-daramis-green transition-colors"
            >
                ODESLAT
            </button>

        </form>
    );
}