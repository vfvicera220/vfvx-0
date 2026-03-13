import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { Pill } from "@/components/Pill";

describe("Pill", () => {
  test("renders pill with text children", async () => {
    const page = await Pill({ key: "test-pill", children: "test" });
    render(page);

    expect(screen.getByTestId("test-pill")).toBeTruthy();
    expect(screen.getByText("test")).toBeTruthy();
  });

  test("renders pill with element children", async () => {
    const page = await Pill({
      key: "test-pill",
      children: <span>test</span>,
    });
    render(page);

    expect(screen.getByTestId("test-pill")).toBeTruthy();
    expect(screen.getByText("test")).toBeTruthy();
  });
});
