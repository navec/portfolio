import { render, screen } from "@testing-library/react";
import Menu from "..";

xdescribe("Menu template", () => {
  test("should display default menu items", () => {
    // Given

    // When
    render(<Menu />);

    // Then
    expect(screen.getByText("Accueil")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Work")).toBeInTheDocument();
  });

  test("should display custom menu items", () => {
    // Given
    const items = [{ name: "Fake data" }];

    // When
    render(<Menu items={items} />);

    // Then
    expect(screen.getByText("Fake data")).toBeInTheDocument();
  });
});
