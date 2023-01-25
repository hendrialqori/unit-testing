import React from "react";

interface TtextOwnProps<E extends React.ElementType> {
  size: "sm" | "md" | "lg";
  color: "primary" | "secondary";
  children: React.ReactNode;
  as: E;
}

type TtextProps<E extends React.ElementType> = TtextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TtextOwnProps<E>>;

export const Text = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: TtextProps<E>) => {
  const Component = as ?? "div";

  return <Component>{children}</Component>;
};
