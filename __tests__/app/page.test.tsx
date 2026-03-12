import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home page", () => {
  test("renders the sidebar and page content", async () => {
    const page = await Home();
    render(page);

    expect(screen.getByTestId("sidebar")).toBeTruthy();
    expect(screen.getByText("test")).toBeTruthy();
  });
});
