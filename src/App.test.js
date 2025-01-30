import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from './components/HomePage'; 

test("renders the HomePage component", () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <HomePage />
    </MemoryRouter>
  );
});
