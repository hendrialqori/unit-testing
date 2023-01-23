import { RegisterForm } from "../components/form.component";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Form Registration", () => {
  test("Render correctly", () => {
    render(<RegisterForm />);

    const titleElement = screen.getByRole("heading", {
      level: 2,
    });
    expect(titleElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox");
    expect(nameElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termElement = screen.getByRole("checkbox", {
      checked: true,
    });
    expect(termElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
