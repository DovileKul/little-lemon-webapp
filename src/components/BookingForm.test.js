import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "./BookingForm";

global.fetchAPI = jest.fn();
const mockUpdateTimes = jest.fn();

test("disables the submit button when form is invalid", () => {
  render(<BookingForm availableTimes={[]} updateTimes={mockUpdateTimes} />);

  const submitButton = screen.getByRole("button", { name: /Submit Reservation/i });
  expect(submitButton).toBeDisabled();

  const guestsInput = screen.getByLabelText(/Number of guests:/i);
  fireEvent.change(guestsInput, { target: { value: "0" } });

  expect(submitButton).toBeDisabled();
});

test("enables the submit button when form is valid", async () => {
  fetchAPI.mockResolvedValueOnce(["6:00 PM", "7:00 PM", "8:00 PM"]);

  render(<BookingForm availableTimes={["6:00 PM"]} updateTimes={mockUpdateTimes} />);

  const dateInput = screen.getByLabelText(/Choose date:/i);
  fireEvent.change(dateInput, { target: { value: "2025-01-30" } });

  await waitFor(() => expect(fetchAPI).toHaveBeenCalled());

  const timeSelect = screen.getByLabelText(/Choose time:/i);
  fireEvent.change(timeSelect, { target: { value: "6:00 PM" } });

  const guestsInput = screen.getByLabelText(/Number of guests:/i);
  fireEvent.change(guestsInput, { target: { value: "4" } });

  const occasionSelect = screen.getByLabelText(/Occasion:/i);
  fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

  const submitButton = screen.getByRole("button", { name: /Submit Reservation/i });
  expect(submitButton).not.toBeDisabled();
});
