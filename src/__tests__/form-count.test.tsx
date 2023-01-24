import { FormCounter } from "../components/form-count.component";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import user from "@testing-library/user-event";

describe("Form Counter", () => {
  test("Set count value from input", async () => {
    user.setup();
    render(<FormCounter />);

    const amountCount = screen.getByRole("spinbutton");
    await user.type(amountCount, "10");
    expect(amountCount).toHaveValue(10);

    const buttonSet = screen.getByRole("button", { name: "Set count" });
    await user.click(buttonSet);

    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toHaveTextContent("10");
  });
});
