const readMoreButton = document.getElementById("read-more-button");
const additionalText = document.getElementById("additional-text");

function toggleAdditionalText() {
  if (
    additionalText.style.display === "none" ||
    additionalText.style.display === ""
  ) {
    additionalText.style.display = "block";
    readMoreButton.textContent = "Read Less";
  } else {
    additionalText.style.display = "none";
    readMoreButton.textContent = "Read More";
  }
}
readMoreButton.addEventListener("click", toggleAdditionalText);

// Q2
function missingNumber() {
  const length = parseInt(prompt("Enter the length of the array:"));
  const arr = [];
  for (let i = 0; i < length; i++) {
    const element = parseInt(prompt(`Enter element ${i + 1}:`));
    arr.push(element);
  }
  let expectedSum = 0;
  for (let i = 0; i <= length; i++) {
    expectedSum += i;
  }
  let actualSum = 0;
  for (let j in arr) {
    actualSum += parseInt(arr[j]);
  }
  console.log(`Missing number is: ${expectedSum - actualSum}`);
}
