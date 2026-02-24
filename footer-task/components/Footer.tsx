import LeadForm from "@/components/LeadForm";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-primary-darkest text-primary-creamy">

            {/* Up Section */}
            <section className="w-full px-5 md:px-10 pt-[112px] pb-[60px] lg:pt-[160px] lg:pb-[80px]">


                <div className="max-w-[1280px] mx-auto">


                    {/* Mobile header */}
                    <div className="lg:hidden mb-8">


                        <h1
                            className="font-nudista text-primary-accent"
                            style={{
                                fontSize: "var(--text-h1-mobile)",
                                lineHeight: "var(--leading-h1-mobile)",
                                letterSpacing: "var(--tracking-h1-mobile)"
                            }}
                        >
                            Nepropásněte
                        </h1>
                        <h1
                            className="font-nudista text-primary-white mt-4 text-right"
                            style={{
                                fontSize: "var(--text-h1-mobile)",
                                lineHeight: "var(--leading-h1-mobile)",
                                letterSpacing: "var(--tracking-h1-mobile)"
                            }}
                        >
                            život na Letné
                        </h1>
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

                </div>


            </section>

            {/* Middle Section */}
            <section
                className="w-full px-5 md:px-10 pt-[112px] lg:pb-[80px]"
                    style={{paddingTop: "var(--spacing-same"}}
            >


                <div className="max-w-[1280px] mx-auto">

                    {/* Desktop: form + contacts*/}
                    <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-end mt-16">

                        <div className="flex flex-col">
                            <LeadForm />
                        </div>

                        <div className="flex flex-col self-start">
                            <div className="flex flex-col gap-1">
                                <p
                                    className="font-arial text-primary-creamy"
                                    style={{
                                        fontSize: "var(--text-small)",
                                        lineHeight: "var(--leading-small)"
                                    }}
                                >
                                    Nemáte rádi formuláře?
                                    <br />
                                    Ozvěte se nám přímo.
                                </p>
                                <a
                                    href="mailto:sales@daramis.com"
                                    className="font-arial text-primary-creamy hover:text-primary-accent transition-colors mt-6"
                                    style={{ fontSize: "var(--text-small)", lineHeight: "var(--leading-small)" }}
                                >
                                    sales@daramis.com
                                </a>
                                <a
                                    href="tel:+420800226223"
                                    className="font-arial text-primary-creamy hover:text-primary-accent transition-colors mt-4"
                                    style={{ fontSize: "var(--text-small)", lineHeight: "var(--leading-small)" }}
                                >
                                    +420 800 226 223
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Mobile: subtitle + form + contacts */}
                    <div className="lg:hidden flex flex-col gap-10">

                        {/* Subtitle */}
                        <p
                            className="font-arial text-primary-creamy/70 pt-20"
                            style={{ fontSize: "var(--text-small)", lineHeight: "var(--leading-small)" }}
                        >
                            Máte otázky nebo si chcete domluvit osobní setkání?
                            Obraťte se na nás a my vám rádi odpovíme na vše, co vás zajímá.
                        </p>

                        {/* Form */}
                        <LeadForm />

                        {/* Сontacts */}
                        <div className="flex flex-col gap-1 pt-20">
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




            {/* Pre-Bottom Section: Letna esens  + (LOKALITA + KONTAKT) */}
            <section
                className="w-full px-5 md:px-10"
                style={{paddingTop: "var(--spacing-same"}}
            >
                <div className="max-w-[1280px] mx-auto">

                    {/* Desktop */}
                    <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-start">

                        {/* Left Column: Letna esens */}
                        <div className="flex flex-col items-start">
                            <Image src="/letna_esens.svg" alt="DARAMIS" width={500} height={150} />
                        </div>

                        {/* Right Column: (LOKALITA + KONTAKT) + Contact info */}
                        <div className="grid grid-cols-2 items-start gap-20">

                            {/* LOKALITA */}
                            <div className="flex flex-col gap-3">
                                <span
                                    className="font-arial text-primary-white uppercase tracking-widest"
                                    style={{ fontSize: "var(--text-paragraph)" }}
                                >
                                    Lokalita
                                </span>
                            </div>

                            {/* KONTAKT */}
                            <div className="flex flex-col gap-3">
                                <span
                                    className="font-arial text-primary-white uppercase tracking-widest"
                                    style={{ fontSize: "var(--text-paragraph)" }}
                                >
                                    Kontakt
                                </span>
                            </div>

                            {/* EMAIL + TELEFON */}
                            <div className="flex flex-col gap-3">

                                {/* EMAIL */}
                                <div className="flex flex-col gap-1">
                                    <span
                                        className="font-arial text-primary-white uppercase tracking-widest"
                                        style={{ fontSize: "var(--text-label)" }}
                                    >
                                        E-MAIL
                                    </span>
                                    <a
                                        href="mailto:info@esens.cz"
                                        className="font-arial text-primary-white hover:text-primary-accent transition-colors"
                                        style={{ fontSize: "var(--text-paragraph)" }}
                                    >
                                        info@esens.cz
                                    </a>
                                </div>

                                {/* TELEFON */}
                                <div className="flex flex-col gap-1 pt-6">
                                    <span
                                        className="font-arial text-primary-white uppercase tracking-widest"
                                        style={{ fontSize: "var(--text-label)" }}
                                    >
                                        TELEFON
                                    </span>
                                    <a
                                        href="tel:+420789893029"
                                        className="font-arial text-primary-white hover:text-primary-accent transition-colors"
                                        style={{ fontSize: "var(--text-paragraph)" }}
                                    >
                                        +420 789 893 029
                                    </a>
                                </div>

                            </div>

                            {/* KC */}
                            <div className="flex flex-col gap-1">
                                <span
                                    className="font-arial text-primary-white uppercase tracking-widest"
                                    style={{ fontSize: "var(--text-label)" }}
                                >
                                    klientské centrum
                                </span>
                                <address
                                    className="font-arial text-primary-white not-italic"
                                    style={{ fontSize: "var(--text-paragraph)" }}
                                >
                                    Jankovcova 1595/14
                                    <br />
                                    170 00, Praha 7
                                </address>
                            </div>

                        </div>


                    </div>

                    {/* Mobile */}
                    <div className="lg:hidden flex flex-col items-center text-center justify-center gap-20">

                        {/* Letná + ESENS */}
                        <div className="flex flex-col items-start">
                            <Image src="/letna_esens.svg" alt="DARAMIS" width={200} height={40} />
                        </div>


                        {/* LOKALITA + KONTAKT */}
                        <div className="flex flex-col gap-6">
                            <span
                                className="font-arial text-primary-white uppercase tracking-widest"
                                style={{ fontSize: "var(--text-paragraph)" }}
                            >
                                Lokalita
                            </span>
                            <span
                                className="font-arial text-primary-white uppercase tracking-widest"
                                style={{ fontSize: "var(--text-paragraph)" }}
                            >
                                Kontakt
                            </span>
                        </div>

                        <div className="flex flex-col gap-6">
                            {/* E-MAIL */}
                            <div className="flex flex-col gap-1">
                            <span
                                className="font-arial text-primary-creamy/40 uppercase tracking-widest"
                                style={{ fontSize: "var(--text-label)" }}
                            >
                                E-mail
                            </span>
                                <a
                                    href="mailto:info@esens.cz"
                                    className="font-arial text-primary-creamy hover:text-primary-accent transition-colors"
                                    style={{ fontSize: "var(--text-paragraph)" }}
                                >
                                    info@esens.cz
                                </a>
                            </div>

                            {/* TELEFON */}
                            <div className="flex flex-col gap-1">
                            <span
                                className="font-arial text-primary-creamy/40 uppercase tracking-widest"
                                style={{ fontSize: "var(--text-label)" }}
                            >
                                Telefon
                            </span>
                                <a
                                    href="tel:+420789893029"
                                    className="font-arial text-primary-creamy hover:text-primary-accent transition-colors"
                                    style={{ fontSize: "var(--text-paragraph)" }}
                                >
                                    +420 789 893 029
                                </a>
                            </div>

                            {/* KLIENTSKÉ CENTRUM */}
                            <div className="flex flex-col gap-1">
                            <span
                                className="font-arial text-primary-creamy/40 uppercase tracking-widest"
                                style={{ fontSize: "var(--text-label)" }}
                            >
                                Klientské centrum
                            </span>
                                <address
                                    className="font-arial text-primary-creamy not-italic"
                                    style={{ fontSize: "var(--text-paragraph)" }}
                                >
                                    Jankovcova 1595/14<br />
                                    170 00, Praha 7
                                </address>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Bottom Section */}
            <section
                className="w-full px-5 md:px-10"
                style={{paddingTop: "var(--spacing-same"}}
            >
                <div className="max-w-[1280px] mx-auto">

                    {/* Desktop */}
                    <div className="hidden lg:grid items-start">

                        {/* DEVELOPER PROJEKTU + DARAMIS */}
                        <div className="flex flex-col items-start py-10">
                            <span
                                className="font-arial text-primary-creamy-2 uppercase tracking-widest mb-1"
                                style={{ fontSize: "var(--text-label)" }}
                            >
                                Developer projektu
                            </span>

                            <Image src="/daramis.svg" alt="DARAMIS" width={200} height={40} />
                        </div>

                        {/* Disclaimer + Copyright + Links */}
                        <div className="flex flex-col gap-4 py-8">

                            {/* Disclaimer */}
                            <p
                                className="font-arial text-primary-creamy-2 max-w-xl uppercase"
                                style={{
                                    fontSize: "var(--text-label)",
                                    lineHeight: "var(--leading-label)"
                                }}
                            >
                                Uveřejněné vizualizace a jiná vyobrazení na webových stránkách a dalších materiálech jsou
                                pouze ilustrační. Mohou se měnit, jsou nezávazné a nepředstavují nabídku ani návrh na
                                uzavření smlouvy.
                            </p>

                            {/* Copyright + GDPR + Apadore */}
                            <div className="flex items-center justify-between">
                                <p
                                    className="font-arial text-primary-creamy-2"
                                    style={{ fontSize: "var(--text-label)" }}
                                >
                                    © 2025 Park Living, s.r.o. Všechna práva vyhrazena
                                </p>
                                <div className="flex items-center gap-6">
                                    <a
                                        href="#"
                                        className="font-arial text-primary-creamy-2 uppercase tracking-wider hover:text-primary-creamy/60 transition-colors"
                                        style={{ fontSize: "var(--text-label)" }}
                                    >
                                        GDPR
                                    </a>
                                    <a
                                        href="#"
                                        className="font-arial text-primary-creamy-2 uppercase tracking-wider hover:text-primary-creamy/60 transition-colors"
                                        style={{ fontSize: "11px" }}
                                    >
                                        Made by Apadore
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="lg:hidden flex flex-col items-center text-center gap-10 py-8">

                        {/* DEVELOPER PROJEKTU + DARAMIS */}
                        <div className="flex flex-col items-center gap-1">
                            <span
                                className="font-arial text-primary-creamy-2 uppercase tracking-widest"
                                style={{ fontSize: "var(--text-label)" }}
                            >
                                Developer projektu
                            </span>
                            <Image src="/daramis.svg" alt="DARAMIS" width={200} height={40} />
                        </div>

                        {/* GDPR + Apadore */}
                        <div className="flex flex-col items-center gap-6">
                            <a
                                href="#"
                                className="font-arial text-primary-creamy-2 uppercase tracking-wider hover:text-primary-creamy/60 transition-colors"
                                style={{ fontSize: "var(--text-label)" }}
                            >
                                GDPR
                            </a>
                            <a
                                href="#"
                                className="font-arial text-primary-creamy-2 uppercase tracking-wider hover:text-primary-creamy/60 transition-colors"
                                style={{ fontSize: "var(--text-label)" }}
                            >
                                Made by Apadore
                            </a>
                        </div>

                        {/* Disclaimer */}
                        <div className="flex flex-col items-center gap-4">
                            <p
                                className="font-arial text-primary-creamy-2 uppercase"
                                style={{
                                    fontSize: "var(--text-label)",
                                    lineHeight: "var(--leading-label)"
                                }}
                            >
                                Uveřejněné vizualizace a jiná vyobrazení na webových stránkách a dalších materiálech jsou
                                pouze ilustrační. Mohou se měnit, jsou nezávazné a nepředstavují nabídku ani návrh na
                                uzavření smlouvy.
                            </p>

                            {/* Copyright */}
                            <p
                                className="font-arial text-primary-creamy-2 pb-6"
                                style={{ fontSize: "var(--text-label)" }}
                            >
                                © 2024 Park Living, s.r.o. Všechna práva vyhrazena
                            </p>
                        </div>


                    </div>
                </div>
            </section>




        </footer>
    );
}
