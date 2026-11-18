import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { cleanup } from "@testing-library/react";
import { ThemeProvider, ThemeSwitch } from "@/components/theme";

afterEach(() => {
  cleanup();
  localStorage.clear();
  document.documentElement.classList.remove("dark");
});
describe("Visitor theme preference", () => {
  it("lets a visitor switch from light to dark and back", () => {
    render(
      <ThemeProvider>
        <ThemeSwitch />
      </ThemeProvider>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Switch to dark theme" }));
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("walutech-theme")).toBe("dark");
    fireEvent.click(screen.getByRole("button", { name: "Switch to light theme" }));
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem("walutech-theme")).toBe("light");
  });
  it("restores the visitor's saved dark preference", async () => {
    localStorage.setItem("walutech-theme", "dark");
    render(
      <ThemeProvider>
        <ThemeSwitch />
      </ThemeProvider>,
    );
    await waitFor(() => expect(document.documentElement.classList.contains("dark")).toBe(true));
  });
});
