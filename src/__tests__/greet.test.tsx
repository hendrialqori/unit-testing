import { Greet } from "../components/greet.component";
import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";

describe("Greet", () => {
  test("render text", () => {
    render(<Greet />);

    const textElement = screen.getByText("Hello world!");
    expect(textElement).toBeInTheDocument();
  });
});
