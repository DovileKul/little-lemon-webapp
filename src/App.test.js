import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from './components/HomePage';  // Testing only HomePage component

test("renders the HomePage component", () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <HomePage />
    </MemoryRouter>
  );
});
