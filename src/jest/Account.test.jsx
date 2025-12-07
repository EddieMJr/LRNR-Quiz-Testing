import { render, screen } from "@testing-library/react";
import Account from "../pages/Account.jsx";
import { expect } from "vitest";

describe("Account Page Details", () => {
  test("renders platinum quizzes, level info, and xp", () => {
    render(<Account />);

    // Section titles
    expect(screen.getByText("Streak")).toBeInTheDocument();
    expect(screen.getByText("Platinum Quizzes")).toBeInTheDocument();
    expect(screen.getByText("lrnr Level: 2")).toBeInTheDocument();

    // Streak Text
    expect(screen.getByText("You have a streak of 5 days!")).toBeInTheDocument();

    // Quiz list items
    expect(screen.getByText("golang - Intermediate")).toBeInTheDocument();
    expect(screen.getByText("Javascript - Beginner")).toBeInTheDocument();
    expect(screen.getByText("AWS - Beginner")).toBeInTheDocument();

    // XP text
    expect(screen.getByText("150/200 xp")).toBeInTheDocument();
  });
});
