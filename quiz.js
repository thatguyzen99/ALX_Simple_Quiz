// Define the function to check the answer
function checkAnswer() {
    // The correct answer
    const correctAnswer = "4";

    // Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Feedback element
    const feedbackElement = document.getElementById("feedback");

    // Check if an option was selected
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Compare the selected answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red";
        }
    } else {
        // If no option was selected
        feedbackElement.textContent = "Please select an answer before submitting.";
        feedbackElement.style.color = "orange";
    }
}

// Add an event listener to the submit button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);

