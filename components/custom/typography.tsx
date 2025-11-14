interface Props {
  children: string;
  className?: React.ComponentProps<"div">["className"];
}

export function H1({ children, className }: Props) {
  return (
    <h1 className={`text-3xl text-center text-foreground ${className}`}>
      {children}
    </h1>
  );
}

export function H2({ children, className }: Props) {
  return <h2 className={`text-xl text-foreground ${className}`}>{children}</h2>;
}

export function H3({ children, className }: Props) {
  return (
    <h3 className={`text-lg text-muted-foreground ${className}`}>{children}</h3>
  );
}

export function P({ children, className }: Props) {
  return <p className={`text-muted-foreground ${className}`}>{children}</p>;
}
