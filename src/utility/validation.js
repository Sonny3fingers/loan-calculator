export function validateInputValue(inputValue) {
  if (inputValue.trim() === 0 || inputValue <= 0) {
    throw new Error("Please enter valid input number ( > 0 ).");
  }
}

export function validateNumber(number) {
  if (typeof number !== "number" || isNaN(number)) {
    throw new Error("Input number is not valid.");
  }
}
