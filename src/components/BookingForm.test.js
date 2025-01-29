import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders the BookingForm heading", () => {
    render(<BookingForm />);
    const headingElement = screen.getByText(/Book Now/i); // Adjust based on actual text
    expect(headingElement).toBeInTheDocument();
});
