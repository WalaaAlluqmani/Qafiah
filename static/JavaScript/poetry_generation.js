
// Buttons definition
const createButton = document.querySelector('.material-btn-last');
const buttons = document.querySelectorAll('.material-btn');

// Disable the button by default
createButton.disabled = true;

// Variable to track selection status
let isTypeSelected = false;

// An event when any button of the types is pressed
buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Remove the "selected" class from all buttons
        buttons.forEach(btn => btn.classList.remove('selected'));
        // Add the "selected" class to the button that was pressed.
        this.classList.add('selected');
        // Activate the "انشئ قصيدتك" button
        isTypeSelected = true;
        createButton.disabled = false;
    });
});

// Check when the mouse hovers over the "انشئ قصيدتك" button if no type is selected
createButton.addEventListener('mouseenter', function (event) {
    // If no type is selected, the "انشئ قصيدتك" button will show an alert and will not be pressed.
    if (!isTypeSelected) {
        alert("يرجى إختيار نوع قبل إنشاء القصيدة !!");
        event.preventDefault();
    }
});

