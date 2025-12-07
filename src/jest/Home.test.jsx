import { render, screen } from "@testing-library/react";
import Home from "../pages/Home.jsx";
import { BrowserRouter } from "react-router-dom";

describe("Home Page", () => {
  test("renders logo, hero text, and Begin Journey button", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    // Hero text
    expect(
      screen.getByText("Your Guided path to programming enlightenment")
    ).toBeInTheDocument();

    // Button
    expect(screen.getByRole("button", { name: /begin journey/i })).toBeInTheDocument();
  });
});
