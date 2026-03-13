import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { Section } from "@/components/Section";

describe("Section", () => {
  test("renders section with title and children", async () => {
    const page = await Section({
      title: "Test Section",
      children: "test child",
    });
    render(page);

    const header = screen.getByText("Test Section");

    expect(header).toBeTruthy();
    expect(header.className).toEqual(
      "text-xs font-normal pb-1 text-[#606060] uppercase",
    );
    expect(screen.getByText("test child")).toBeTruthy();
  });
});
