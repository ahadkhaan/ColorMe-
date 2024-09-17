const colorBtn = document.getElementById('colorBtn');
const userInput = document.getElementById('userInput');

colorBtn.addEventListener('click', () => {
  
    const userNumber = parseInt(userInput.value);

    for (let i = 1; i <= 9; i++) {
        document.getElementById(`num${i}`).style.backgroundColor = '#eee';
    }

    if (userNumber >= 1 && userNumber <= 9) {
        document.getElementById(`num${userNumber}`).style.backgroundColor = 'tomato';
        document.getElementById(`num${userNumber}`).style.color = 'white';
        document.getElementById(`num${userNumber}`).style.color = 'black';

    } else {
        alert('Please enter a valid number between 1 and 9.');
    }
});
