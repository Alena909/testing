import TransactionCreateStepTwo from "./TransactionCreateStepTwo";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

//These tests check for user interaction and check conditional rendering

test("on initial render the pay button is disabled", () => {
  render(
    <TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />
  );
  screen.debug();
});

test("on initial render the pay button is disabled", () => {
  render(
    <TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />
  );
  screen.getByRole("");
});

test("on initial render the pay button is disabled", async () => {
  render(
    <TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />
  );
  expect(await screen.findByRole("button", { name: /pay/ })).toBeEnabled();
});

test("on initial render the pay button is disabled", async () => {
  render(
    <TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />
  );
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});

test("if amount and note is entered, the pay button becomes enabled", async () => {
  render(
    <TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />
  );
  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");
  screen.getByRole("");
});

test("if amount and note is entered, the pay button becomes enabled", async () => {
  render(
    <TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />
  );
  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});

test("if amount and note is entered, the pay button becomes enabled", async () => {
  render(
    <TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />
  );
  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");
  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
