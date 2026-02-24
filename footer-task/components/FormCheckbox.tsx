export default function FormCheckbox({
                          name,
                          checked,
                          onChange,
                          error,
                          isRequired,
                          children,
                      }: {
    name: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    isRequired?: boolean;
    children: React.ReactNode;
}) {
    return (
        <label className="flex items-start gap-3 cursor-pointer group">
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChange}
                className="hidden"
            />
            <div
                className={`shrink-0 transition-all duration-300 border ${
                    checked
                        ? "bg-primary-accent border-primary-accent scale-110"
                        : error && isRequired
                            ? "bg-transparent border-error group-hover:scale-110"
                            : "bg-transparent border-primary-creamy group-hover:scale-110"
                }`}
                style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "4px",
                    marginTop: "6px",
                }}
            />
            <span
                className="font-arial text-primary-white group-hover:text-primary-creamy transition-all duration-300"
                style={{ fontSize: "var(--text-small)", lineHeight: "var(--leading-small)" }}
            >
                {children}
            </span>
        </label>
    );
}
