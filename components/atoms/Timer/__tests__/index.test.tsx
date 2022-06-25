import Timer from "@/components/atoms/Timer";
import { TimeUnit } from "@/components/types/TimeUnit.enum";
import { render, screen } from "@testing-library/react";

describe(`${Timer.name} Template`, () => {
  describe("should display", () => {
    test("10 days", () => {
      // Given
      const value = 10;
      const timeUnit = TimeUnit.DAYS;
      const expected = "10";

      // When
      render(<Timer value={value} timeUnit={timeUnit} />);

      // Then
      expect(screen.getByText(expected)).toBeInTheDocument();
    });

    test("10 hours", () => {
      // Given
      const value = 10;
      const timeUnit = TimeUnit.HOURS;
      const expected = "10";

      // When
      render(<Timer value={value} timeUnit={timeUnit} />);

      // Then
      expect(screen.getByText(expected)).toBeInTheDocument();
    });

    test("10 minutes", () => {
      // Given
      const value = 10;
      const timeUnit = TimeUnit.MINUTES;
      const expected = "10";

      // When
      render(<Timer value={value} timeUnit={timeUnit} />);

      // Then
      expect(screen.getByText(expected)).toBeInTheDocument();
    });

    test("10 seconds", () => {
      // Given
      const value = 10;
      const timeUnit = TimeUnit.SECONDS;
      const expected = "10";

      // When
      render(<Timer value={value} timeUnit={timeUnit} />);

      // Then
      expect(screen.getByText(expected)).toBeInTheDocument();
    });
  });
});
