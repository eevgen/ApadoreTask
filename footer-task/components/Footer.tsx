import LeadForm from "@/components/LeadForm";

export default function Footer() {
    return (
        <footer className="bg-daramis-green text-daramis-creamy w-full py-16 px-4 md:px-10 lg:py-32">
            <div className="max-w-7xl mx-auto">

                {/* 1 column on mobile and 2 columns on desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* left column */}
                    <div className="flex flex-col justify-center">
                        <h1 className="font-nudista text-5xl lg:text-7xl mb-6">
                            Nepropásněte <br /> život na Letné
                        </h1>
                        <p className="font-arial text-lg opacity-80 max-w-md">
                            Máte otázky nebo si chcete domluvit osobní setkání?
                            Obraťte se na nás a my vám rádi odpovíme na vše, co vás zajímá.
                        </p>
                    </div>

                    {/* right column */}
                    <div className="flex flex-col justify-center">
                        <LeadForm />
                    </div>

                </div>
            </div>
        </footer>
    );
}