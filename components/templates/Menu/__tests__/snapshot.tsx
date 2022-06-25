import { render } from "@testing-library/react";
import Menu from "..";

xit("renders menu with defaul menu", () => {
  // Given

  // When
  const { container } = render(<Menu />);

  // Then
  expect(container).toMatchSnapshot();
});
