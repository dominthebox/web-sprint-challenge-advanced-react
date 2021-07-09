import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";
import MutationObserver from 'mutationobserver-shim';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  // Arrange
  render(<CheckoutForm />);
  // Act
  const formHeader = screen.getByText(/checkout form/i);
  // Assert
  expect(formHeader).toBeInTheDocument();
  expect(formHeader).toBeTruthy();
  expect(formHeader).toHaveTextContent(/checkout form/i);
});

test("form shows success message on submit with form details", async () => {
  // Arrange
  render(<CheckoutForm />);
  // Act
  const firstNameField = screen.getByLabelText(/first name:/i);
  const lastNameField = screen.getByLabelText(/last name:/i);
  const addressField = screen.getByLabelText(/address:/i);
  const cityField = screen.getByLabelText(/city:/i);
  const stateField = screen.getByLabelText(/state:/i);
  const zipField = screen.getByLabelText(/zip:/i);
  const submitButton = screen.getByRole("button");

  userEvent.type(firstNameField, "dom");
  userEvent.type(lastNameField, "sallustro");
  userEvent.type(addressField, "1234 fake st");
  userEvent.type(cityField, "paradise city");
  userEvent.type(stateField, "NJ");
  userEvent.type(zipField, "12494");
  userEvent.click(submitButton);

  // Assert
  await waitFor(() => {
    const nameDisplay = screen.getByText("dom sallustro");
    const addressDisplay = screen.queryByText("1234 fake st");
    const cityStateZipDisplay = screen.getByText("paradise city, NJ 12494");
    const messageDisplay = screen.queryByTestId(/successMessage/i);

    expect(nameDisplay).toBeInTheDocument();
    expect(addressDisplay).toBeInTheDocument();
    expect(cityStateZipDisplay).toBeInTheDocument();
    expect(messageDisplay).toBeInTheDocument();
  })
});
