import { getInputValues, outputResults } from "./utility/DOMmanipulations.js";
import { calculateResults } from "./utility/calculations.js";

function calculateResult() {
  try {
    // get and validate input values
    let [amount, interest, years] = getInputValues();
    // calculate input values
    const results = calculateResults(amount, interest, years);
    // output results
    outputResults(results);
    // Show results
    document.getElementById("results").style.display = "block";
    // Hide loading
    document.getElementById("loading").style.display = "none";
  } catch (error) {
    console.log("Something went wrong. Try again.");
  }
}

// Listen for Submit
document.getElementById("loan-form").addEventListener("submit", function (e) {
  // Hide results
  document.getElementById("results").style.display = "none";
  // Show loader
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResult, 2000);

  e.preventDefault();
});
