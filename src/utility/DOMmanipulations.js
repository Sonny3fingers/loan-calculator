import { validateInputValue, validateNumber } from "./validation";

// input elements
const amountEl = document.getElementById("amount");
const interestEl = document.getElementById("interest");
const yearsEl = document.getElementById("years");
// output elements
const monthlyPayment = document.getElementById("monthly-payment");
const totalPayment = document.getElementById("total-payment");
const totalInterest = document.getElementById("total-interest");

const inputElements = [amountEl, interestEl, yearsEl];

function transformToNumber(inputValue) {
  return +inputValue;
}

export function getInputValues() {
  const inputValues = [];
  try {
    inputElements.forEach((element) => {
      validateInputValue(element.value);
      const number = transformToNumber(element.value);
      validateNumber(number);
      inputValues.push(number);
    });
    return inputValues;
  } catch (error) {
    showError(error);
  }
}

export function outputResults(results) {
  monthlyPayment.value = results.monthly;
  totalPayment.value = results.totalPayments;
  totalInterest.value = results.totalInterest;
}

// Show Error
export function showError(error) {
  // Hide results
  document.getElementById("results").style.display = "none";
  // Hide loader
  document.getElementById("loading").style.display = "none";
  // Create a div
  const errorDiv = document.createElement("div");
  // Get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");
  // Add class
  errorDiv.className = "alert alert-danger";
  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));
  // Insert error above heading
  card.insertBefore(errorDiv, heading);
  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// Clear error
function clearError() {
  document.querySelector(".alert").remove();
}
