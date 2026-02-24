
export default function FormTextField({
                                          label,
                                          error,
                                          children,
                                      }: {
    label: string;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col w-full gap-2.5">
            <div className="flex items-center justify-between mb-1 h-6">
                <label
                    className="font-arial text-primary-white"
                    style={{
                        fontSize: "var(--text-small)",
                        lineHeight: "var(--leading-small)",
                    }}
                >
                    {label}
                </label>
                <span
                    className={`font-arial text-error transition-all duration-300 ${error ? "opacity-100" : "opacity-0"}`}
                    style={{ fontSize: "var(--text-small)" }}
                >
                    {error}
                </span>
            </div>
            {children}
        </div>
    );
}