import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "./Login";

const mockLogin = vi.fn();

vi.mock("../../components/contexts/AuthContext.jsx", () => ({
  useAuth: () => ({
    login: mockLogin,
  }),
}));

describe("Login Component", () => {
  it("should render the heading", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const heading = screen.getByText("Login Now");
    expect(heading).toBeInTheDocument();
  });

  it("should call login function on form submit", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const input = screen.getByTestId("number");
    const button = screen.getByTestId("login-btn");
    fireEvent.change(input, { target: { value: "+254712345678" } });
    fireEvent.click(button);
    expect(mockLogin).toHaveBeenCalledWith();
  });
});
