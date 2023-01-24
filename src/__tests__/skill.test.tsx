import { render, screen } from "@testing-library/react";
import { Skills } from "../components/skill.component";
import { describe, test, expect } from "vitest";

describe("Skills", () => {
  const mySkill = ["Javascript", "Node JS", "Typescript"];

  test("Render correctly", () => {
    render(<Skills skills={mySkill} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("Render correctly list item", () => {
    render(<Skills skills={mySkill} />);
    const listItemElement = screen.getAllByRole("listitem");
    expect(listItemElement).toHaveLength(3);
  });

  test("Render login button", () => {
    render(<Skills skills={mySkill} />);
    const loginButton = screen.getByRole("button", {
      name: "Login to learning",
    });
    expect(loginButton).toBeInTheDocument();
  });

  // test("Start learning button not renderer", () => {
  //   render(<Skills skills={mySkill} />);
  //   const startLearningButton = screen.queryByRole("button", {
  //     name: "Start learning",
  //   });
  //   expect(startLearningButton).not.toBeInTheDocument();
  // });

  test("Start learning button eventually displayed", async () => {
    render(<Skills skills={mySkill} />);
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
        // default timeout = 1000
      }
    );

    expect(startLearningButton).toBeInTheDocument();
  });
});
