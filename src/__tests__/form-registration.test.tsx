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

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText("your name");
    expect(nameElement3).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termElement = screen.getByRole("checkbox", {
      checked: true,
    });
    expect(termElement).toBeInTheDocument();

    const termElement2 = screen.getByLabelText(
      "I agree to the terms and condition"
    );
    expect(termElement2).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
