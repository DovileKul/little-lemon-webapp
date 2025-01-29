import { initializeTimes, updateTimes } from "./Main";

test("initializeTimes returns expected times", () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00"]);
});

test("updateTimes returns the same available times", () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00"];
  const action = { type: "UPDATE_TIMES", date: "2025-01-30" };

  const updatedTimes = updateTimes(initialState, action);
  expect(updatedTimes).toEqual(initialState);
});
