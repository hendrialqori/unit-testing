import { Counter } from "../components/counter.component";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";

describe.skip("Counter with Fire-Event", () => {
  it("Render counter component", () => {
    render(<Counter initialValue={0} />);

    fireEvent.click(
      screen.getByRole("button", {
        name: "Add 1",
      })
    );

    const currentValue = screen.getByRole("heading", {
      level: 3,
    });

    expect(currentValue).toHaveTextContent("1");
  });
});

describe("Counter with user-event", () => {
  test("Click button correctly", async () => {
    user.setup();
    render(<Counter initialValue={0} />);

    const buttonElement = screen.getByRole("button", {
      name: "Add 1",
    });

    const headingElement = screen.getByRole("heading", {
      level: 3,
    });

    await user.dblClick(buttonElement);

    expect(headingElement).toHaveTextContent("2");
  });
});
