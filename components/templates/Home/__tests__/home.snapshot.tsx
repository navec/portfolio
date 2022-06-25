import HomeTemplate from "@/templates/Home";
import { render } from "@testing-library/react";

xit("renders homepage unchanged", () => {
  const { container } = render(<HomeTemplate />);
  expect(container).toMatchSnapshot();
});
