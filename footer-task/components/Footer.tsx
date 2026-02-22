import LeadForm from "@/components/LeadForm";

export default function Footer() {
    return (
        <footer className="w-full bg-primary-darkest text-primary-creamy">

            {/* Up Section */}
            <section className="w-full px-4 md:px-10 pt-[112px] pb-[60px] lg:pt-[160px] lg:pb-[80px]">


                <div className="max-w-[1280px] mx-auto">

                    {/* Mobile header */}
                    {/* Yet to be modified... */}
                    <div className="lg:hidden mb-8">
                        <h1
                            className="font-nudista"
                            style={{
                                fontSize: "var(--text-h1-mobile)",
                                lineHeight: "var(--leading-h1-mobile)",
                                letterSpacing: "var(--tracking-h1-mobile)"
                            }}
                        >
                            <span className="text-primary-accent">Nepropásněte</span>
                            <br />
                            <span className="text-primary-white">život na Letné</span>
                        </h1>
                        <p
                            className="font-arial text-primary-creamy/70 mt-6"
                            style={{ fontSize: "var(--text-small)", lineHeight: "var(--leading-small)" }}
                        >
                            Máte otázky nebo si chcete domluvit osobní setkání?
                            Obraťte se na nás a my vám rádi odpovíme na vše, co vás zajímá.
                        </p>
                    </div>

                    {/* Desktop header */}
                    <div className="hidden lg:flex lg:flex-col">

                        {/* Raw 1: only 'Nepropásněte'  */}
                        <h1
                            className="font-nudista text-primary-accen
                            /
                            t"
                            style={{
                                fontSize: "var(--text-h1-desktop)",
                                lineHeight: "var(--leading-h1-desktop)",
                                letterSpacing: "var(--tracking-h1-desktop)"
                            }}
                        >
                            Nepropásněte
                        </h1>

                        {/* Raw two: two columns */}
                        <div className="grid grid-cols-2">

                            {/* Left: subtitle is stuck to the bottom edge */}
                            <div className="flex items-end pb-2">
                                <p
                                    className="font-arial text-primary-creamy/70 max-w-md" // rounded 445.78 to 448 (md)
                                    style={{ fontSize: "var(--text-small)", lineHeight: "var(--leading-small)" }}
                                >
                                    Máte otázky nebo si chcete domluvit osobní setkání?
                                    Obraťte se na nás a my vám rádi odpovíme na vše, co vás zajímá.
                                </p>
                            </div>

                            {/* Right: život na Letné */}
                            <h1
                                className="font-nudista text-primary-white"
                                style={{
                                    fontSize: "var(--text-h1-desktop)",
                                    lineHeight: "var(--leading-h1-desktop)",
                                    letterSpacing: "var(--tracking-h1-desktop)"
                                }}
                            >
                                život
                                <br />
                                na Letné
                            </h1>

                        </div>
                    </div>

                    {/* Yet to be modified... */}
                    <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-end mt-16">

                        <div className="flex flex-col">
                            <LeadForm />
                        </div>

                        <div className="flex flex-col justify-end">
                            <div className="flex flex-col gap-1">
                                <p
                                    className="font-arial text-primary-creamy/60"
                                    style={{ fontSize: "var(--text-small)", lineHeight: "var(--leading-small)" }}
                                >
                                    Nemáte rádi formuláře? Ozvěte se nám přímo.
                                </p>
                                <a
                                    href="mailto:sales@daramis.com"
                                    className="font-arial text-primary-creamy hover:text-primary-accent transition-colors"
                                    style={{ fontSize: "var(--text-small)", lineHeight: "var(--leading-small)" }}
                                >
                                    sales@daramis.com
                                </a>
                                <a
                                    href="tel:+420800226223"
                                    className="font-arial text-primary-creamy hover:text-primary-accent transition-colors"
                                    style={{ fontSize: "var(--text-small)", lineHeight: "var(--leading-small)" }}
                                >
                                    +420 800 226 223
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="lg:hidden flex flex-col gap-10">
                        <LeadForm />
                        <div className="flex flex-col gap-1 pt-4 border-t border-primary-creamy/10">
                            <p
                                className="font-arial text-primary-creamy/60"
                                style={{ fontSize: "var(--text-small)", lineHeight: "var(--leading-small)" }}
                            >
                                Nemáte rádi formuláře? Ozvěte se nám přímo.
                            </p>
                            <a
                                href="mailto:sales@daramis.com"
                                className="font-arial text-primary-creamy hover:text-primary-accent transition-colors"
                                style={{ fontSize: "var(--text-small)", lineHeight: "var(--leading-small)" }}
                            >
                                sales@daramis.com
                            </a>
                            <a
                                href="tel:+420800226223"
                                className="font-arial text-primary-creamy hover:text-primary-accent transition-colors"
                                style={{ fontSize: "var(--text-small)", lineHeight: "var(--leading-small)" }}
                            >
                                +420 800 226 223
                            </a>
                        </div>
                    </div>

                </div>


            </section>




            {/* Bottom Section */}
            {/* Yet to be modified... */}
            <section className="w-full px-4 md:px-10 border-t border-primary-creamy/10">
                <div className="max-w-[1280px] mx-auto">

                    <div className="py-12">
                        <div className="flex flex-col items-start mb-10">
                            <span
                                className="font-arial text-primary-creamy/40 uppercase tracking-widest mb-1"
                                style={{ fontSize: "var(--text-label)" }}
                            >
                                Letná
                            </span>
                            <span
                                className="font-nudista text-primary-creamy tracking-wide"
                                style={{ fontSize: "48px", lineHeight: "1" }}
                            >
                                ESENS
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[auto_auto_1fr_auto_auto_auto] gap-8 md:gap-12 items-start">

                            <div className="flex flex-col gap-3">
                                <span className="font-arial text-primary-creamy/40 uppercase tracking-widest" style={{ fontSize: "var(--text-label)" }}>Lokalita</span>
                                <ul className="flex flex-col gap-2">
                                    {["O projektu", "Lokalita", "Byty", "Galerie"].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="font-arial text-primary-creamy/70 hover:text-primary-accent transition-colors" style={{ fontSize: "var(--text-small)" }}>{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-col gap-3">
                                <span className="font-arial text-primary-creamy/40 uppercase tracking-widest" style={{ fontSize: "var(--text-label)" }}>Kontakt</span>
                                <ul className="flex flex-col gap-2">
                                    {["Kontakt", "FAQ", "Ke stažení"].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="font-arial text-primary-creamy/70 hover:text-primary-accent transition-colors" style={{ fontSize: "var(--text-small)" }}>{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="hidden md:block" />

                            <div className="flex flex-col gap-1">
                                <span className="font-arial text-primary-creamy/40 uppercase tracking-widest" style={{ fontSize: "var(--text-label)" }}>E-mail</span>
                                <a href="mailto:info@esens.cz" className="font-arial text-primary-creamy/80 hover:text-primary-accent transition-colors" style={{ fontSize: "var(--text-small)" }}>info@esens.cz</a>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-arial text-primary-creamy/40 uppercase tracking-widest" style={{ fontSize: "var(--text-label)" }}>Telefon</span>
                                <a href="tel:+420789893029" className="font-arial text-primary-creamy/80 hover:text-primary-accent transition-colors" style={{ fontSize: "var(--text-small)" }}>+420 789 893 029</a>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-arial text-primary-creamy/40 uppercase tracking-widest" style={{ fontSize: "var(--text-label)" }}>Klientské centrum</span>
                                <address className="font-arial text-primary-creamy/80 not-italic" style={{ fontSize: "var(--text-small)" }}>
                                    Jankovcova 1595/14<br />170 00, Praha 7
                                </address>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col items-center py-10 border-t border-primary-creamy/10 gap-1">
                        <span className="font-arial text-primary-creamy/40 uppercase tracking-widest" style={{ fontSize: "var(--text-label)" }}>Developer projektu</span>
                        <span className="font-nudista text-primary-accent tracking-wide" style={{ fontSize: "32px", lineHeight: "1.1" }}>DARAMIS</span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-8 border-t border-primary-creamy/10">
                        <p className="font-arial text-primary-creamy/30 max-w-xl" style={{ fontSize: "11px", lineHeight: "var(--leading-label)" }}>
                            Uveřejněné vizualizace a jiná vyobrazení na webových stránkách a dalších materiálech jsou
                            pouze ilustrační. Mohou se měnit, jsou nezávazné a nepředstavují nabídku ani návrh na
                            uzavření smlouvy.
                        </p>
                        <p className="font-arial text-primary-creamy/30" style={{ fontSize: "11px" }}>© 2025 Park Living, s.r.o. Všechna práva vyhrazena</p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="font-arial text-primary-creamy/30 uppercase tracking-wider hover:text-primary-creamy/60 transition-colors" style={{ fontSize: "11px" }}>GDPR</a>
                            <a href="#" className="font-arial text-primary-creamy/30 uppercase tracking-wider hover:text-primary-creamy/60 transition-colors" style={{ fontSize: "11px" }}>Made by Apadore</a>
                        </div>
                    </div>

                </div>
            </section>

        </footer>
    );
}
