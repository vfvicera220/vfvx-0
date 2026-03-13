import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Sidebar } from "@/components/Sidebar";
import { mockPortfolioData } from "../mocks/portfolioData";

describe("Sidebar", () => {
  test("renders sidebar content", () => {
    render(<Sidebar data={mockPortfolioData} />);

    expect(screen.getByText(mockPortfolioData.personal.name)).toBeTruthy();
    expect(
      screen.getByText(mockPortfolioData.personal.description),
    ).toBeTruthy();
    expect(screen.getByText(mockPortfolioData.contact.email)).toBeTruthy();
    mockPortfolioData.skills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeTruthy();
    });
    mockPortfolioData.languages.forEach((language) => {
      expect(screen.getByText(language)).toBeTruthy();
    });
    mockPortfolioData.socials.forEach((social) => {
      expect(screen.getByTestId(social.platform.toLowerCase())).toBeTruthy();
    });
  });
});
