// Get the button and input element
const colorBtn = document.getElementById('colorBtn');
const userInput = document.getElementById('userInput');

// Event listener for the button click
colorBtn.addEventListener('click', () => {
    // Get the user's input
    const userNumber = parseInt(userInput.value);

    // Remove existing background colors from all numbers
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`num${i}`).style.backgroundColor = '#eee';
    }

    // Check if the input is a valid number between 1 and 9
    if (userNumber >= 1 && userNumber <= 9) {
        // Change the background color of the corresponding number
        document.getElementById(`num${userNumber}`).style.backgroundColor = 'tomato';
        document.getElementById(`num${userNumber}`).style.color = 'white';
        document.getElementById(`num${userNumber}`).style.color = 'black';

    } else {
        alert('Please enter a valid number between 1 and 9.');
    }
});
