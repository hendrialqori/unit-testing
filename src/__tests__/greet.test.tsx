import { Greet } from "../components/Greeting/greet.component";
import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";

describe("Greet", () => {
  test("render text", () => {
    const { getByTestId } = render(<Greet />);
    const result = getByTestId("greet").textContent;

    expect(result).toEqual("Hello world!");
  });
});
