
// // // Buttons definition
// // const createButton = document.querySelector('.material-btn-last');
// // const buttons = document.querySelectorAll('.material-btn');

// // // Disable the button by default
// // createButton.disabled = true;

// // // Variable to track selection status
// // let isTypeSelected = false;

// // // An event when any button of the types is pressed
// // buttons.forEach(button => {
// //     button.addEventListener('click', function () {
// //         // Remove the "selected" class from all buttons
// //         buttons.forEach(btn => btn.classList.remove('selected'));
// //         // Add the "selected" class to the button that was pressed.
// //         this.classList.add('selected');
// //         // Activate the "انشئ قصيدتك" button
// //         isTypeSelected = true;
// //         createButton.disabled = false;
// //     });
// // });

// // // Check when the mouse hovers over the "انشئ قصيدتك" button if no type is selected
// // createButton.addEventListener('mouseenter', function (event) {
// //     // If no type is selected, the "انشئ قصيدتك" button will show an alert and will not be pressed.
// //     if (!isTypeSelected) {
// //         alert("يرجى إختيار النوع قبل إنشاء القصيدة !!");
// //         event.preventDefault();
// //     }
// // });




// // Buttons definition
// const createButton = document.querySelector('.material-btn-last');
// const buttons = document.querySelectorAll('.material-btn');

// // Disable the button by default
// createButton.disabled = true;

// // Variable to track selection status
// let isTypeSelected = false;

// // An event when any button of the types is pressed
// buttons.forEach(button => {
//     button.addEventListener('click', function () {
//         // Remove the "selected" class from all buttons
//         buttons.forEach(btn => btn.classList.remove('selected'));
//         // Add the "selected" class to the button that was pressed.
//         this.classList.add('selected');
//         // Activate the "انشئ قصيدتك" button
//         isTypeSelected = true;
//         createButton.disabled = false;
//     });
// });

// // Check when the mouse hovers over the "انشئ قصيدتك" button if no type is selected
// createButton.addEventListener('click', function (event) {
//     // If no type is selected, the "انشئ قصيدتك" button will show an alert and will not be pressed.
//     if (!isTypeSelected) {
//         alert("يرجى إختيار hhhhhhh النوع قبل إنشاء القصيدة !!");
//         event.preventDefault();
//     }
//     else{
//         window.location.href = "/generate-poetry"; 
//     }
// });




document.addEventListener("DOMContentLoaded", function () {
    const createButton = document.querySelector('.material-btn-last');
    const buttons = document.querySelectorAll('.material-btn');

    // When the page loads, make the button appear inactive (Add the "selected" class to the "انشئ قصيدتك" button)
    createButton.classList.add("disabled");

    // Variable to track selection status
    let isTypeSelected = false;

    // An event when any button of the types is pressed
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove the "selected" class from all buttons
            buttons.forEach(btn => btn.classList.remove('selected'));
            // Add the "selected" class to the selected button
            this.classList.add('selected');
            // Activate the "انشئ قصيدتك" button
            isTypeSelected = true;
            // Remove the "disabled" class when selecting type
            createButton.classList.remove("disabled");
        });
    });

    // Check when the mouse clicks over the "انشئ قصيدتك" button if no type is selected
    createButton.addEventListener('click', function (event) {
        // if no type is selected
        if (!isTypeSelected) {
            alert("يرجى إختيار النوع قبل إنشاء القصيدة !!!");
            event.preventDefault();
        } else {
            // Go to the output page
            window.location.href = "/generate-poetry";
        }
    });
});