import Countdown from "@/components/molecules/Countdown";
import { render, screen } from "@testing-library/react";

describe(`${Countdown.name} Template`, () => {
  test("should display 10 seconds", () => {
    // Given
    const timestamp = 10;
    const expectedSeconds = "10";

    // When
    render(<Countdown seconds={timestamp} />);

    // Then
    const [expectedDays, expectedHours, expectedMinutes] =
      screen.queryAllByText("00");
    expect(expectedDays).toBeInTheDocument();
    expect(expectedHours).toBeInTheDocument();
    expect(expectedMinutes).toBeInTheDocument();
    expect(screen.getByText(expectedSeconds)).toBeInTheDocument();
  });

  test("should convert 1000 seconds to 16 minutes and 40 seconds", () => {
    // Given
    const timestamp = 1000;
    const expectedMinutes = "16";
    const expectedSeconds = "40";

    // When
    render(<Countdown seconds={timestamp} />);

    // Then
    const [expectedDays, expectedHours] = screen.queryAllByText("00");
    expect(expectedDays).toBeInTheDocument();
    expect(expectedHours).toBeInTheDocument();
    expect(screen.getByText(expectedMinutes)).toBeInTheDocument();
    expect(screen.getByText(expectedSeconds)).toBeInTheDocument();
  });
});
