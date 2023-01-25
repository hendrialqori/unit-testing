import { RenderList } from "../component-generics/list-generics";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

describe("RenderList", () => {
  const users = [
    {
      id: 1,
      name: "Hendri",
    },
    {
      id: 2,
      name: "Alqori",
    },
  ];

  test("Render a list data", () => {
    render(<RenderList data={users} />);

    const textElement = screen.getAllByRole("listitem");

    expect(textElement).toHaveLength(2);
  });
});
