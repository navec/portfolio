import ComingSoon from "@/templates/ComingSoon";
import { render, screen } from "@testing-library/react";

describe(`${ComingSoon.name} Template`, () => {
  test("should display the default title", () => {
    // Given
    const expectedTitle = "Coming soon";

    // When
    render(<ComingSoon />);

    // Then
    expect(screen.getByText(expectedTitle)).toBeInTheDocument();
  });

  test("should display the custom title", () => {
    // Given
    const title = "Fake title";
    const expectedTitle = "Fake title";

    // When
    render(<ComingSoon title={title} />);

    // Then
    expect(screen.getByText(expectedTitle)).toBeInTheDocument();
  });

  test("should display the description", () => {
    // Given
    const description = "Lorem Ipsum is simply dummy ...";
    const expectedTitle = "Lorem Ipsum is simply dummy ...";

    // When
    render(<ComingSoon countdown={0} description={description} />);

    // Then
    expect(screen.getByText(expectedTitle)).toBeInTheDocument();
  });

  test("should display a countdown", () => {
    // Given
    const input = 7000;
    const expectedDays = "00";
    const expectedHours = "01";
    const expectedMinutes = "56";
    const expectedSeconds = "40";

    // When
    render(<ComingSoon countdown={input} />);

    // Then
    expect(screen.getByText(expectedDays)).toBeInTheDocument();
    expect(screen.getByText(expectedHours)).toBeInTheDocument();
    expect(screen.getByText(expectedMinutes)).toBeInTheDocument();
    expect(screen.getByText(expectedSeconds)).toBeInTheDocument();
  });

  test("should display a contact form", () => {
    // Given
  });
});
