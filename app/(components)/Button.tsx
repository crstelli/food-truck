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
      "bg-orange-500 text-orange-50 border border-orange-500 hover:bg-orange-50 hover:text-orange-500",
    secondary:
      "bg-orange-50 text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-orange-50",
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
