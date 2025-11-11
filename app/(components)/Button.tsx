interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";

  className?: string;
}

function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const base = "rounded-lg cursor-pointer duration-150";
  const variants = {
    primary:
      "bg-red-500 text-red-50 border border-red-500 hover:bg-red-50 hover:text-red-500",
    secondary: "",
  };

  const sizes = {
    sm: "text-sm py-1 px-2",
    md: "text-lg py-1 px-4",
    lg: "text-xl py-3 px-6",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}

export { Button };
