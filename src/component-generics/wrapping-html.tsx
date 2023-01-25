type TButtonProps = {
  varian: "primary" | "secondary";
} & React.ComponentProps<"button">;

export const Button = ({ varian, children, ...rest }: TButtonProps) => {
  return (
    <button className={`btn-${varian}`} {...rest}>
      {children}
    </button>
  );
};

export const RenderButton = () => {
  return (
    <Button onClick={() => alert(1234)} varian="primary">
      <b>Click me</b>
    </Button>
  );
};
