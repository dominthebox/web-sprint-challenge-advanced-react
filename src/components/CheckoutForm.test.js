import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

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
    const firstNameDisplay = screen.queryByText("dom");
    const lastNameDisplay = screen.queryByText("sallustro");
    const addressDisplay = screen.queryByText("1234 fake st");
    const cityDisplay = screen.queryByText("paradise city");
    const stateDisplay = screen.queryByText("NJ");
    const zipDisplay = screen.queryByText("12494");
    const messageDisplay = screen.queryByTestId(/successMessage/i);

    expect(firstNameDisplay).toBeInTheDocument();
    expect(lastNameDisplay).toBeInTheDocument();
    expect(addressDisplay).toBeInTheDocument();
    expect(cityDisplay).toBeInTheDocument();
    expect(stateDisplay).toBeInTheDocument();
    expect(zipDisplay).toBeInTheDocument();
    expect(messageDisplay).toBeInTheDocument();
  })
});
