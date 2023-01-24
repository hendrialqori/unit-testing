import { Greet } from "../components/greet.component";
import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";

describe("Greet", () => {
  test("render text", () => {
    render(<Greet />);

    const textElement = screen.getByText("Hello world!");
    expect(textElement).toBeInTheDocument();
  });

  test("Testing manually", () => {
    const { container } = render(<Greet />);
    const data_value = container.querySelector(
      '[data-value="greet"]'
    )?.textContent;
    expect(data_value).toEqual("Hello world!");
  });
});
