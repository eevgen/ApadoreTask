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
                className={`shrink-0 transition-colors border ${
                    checked
                        ? "bg-primary-accent border-primary-accent"
                        : error && isRequired
                            ? "bg-transparent border-error"
                            : "bg-transparent border-primary-creamy"
                }`}
                style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "4px",
                    marginTop: "6px",
                }}
            />
            <span
                className="font-arial text-primary-white group-hover:text-primary-creamy transition-colors"
                style={{ fontSize: "var(--text-small)", lineHeight: "var(--leading-small)" }}
            >
                {children}
            </span>
        </label>
    );
}
