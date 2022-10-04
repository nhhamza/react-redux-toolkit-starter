import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import App from "./index";

afterEach(cleanup);

describe("This will test MyComponent", () => {
  test("renders message", () => {
    render(<App />);
    expect(screen.getByRole("h1")).toBeInTheDocument();
  });
});
