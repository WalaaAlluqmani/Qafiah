
document.addEventListener("DOMContentLoaded", function () {
    const createButton = document.querySelector('.material-btn-last');
    const buttons = document.querySelectorAll('.material-btn');

    // When the page loads, make the button appear inactive (Add the "selected" class to the "انشئ قصيدتك" button)
    createButton.classList.add("disabled");

    // Variable to track selection status
    let isTypeSelected = false;

    // // An event when any button of the types is pressed
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
            showSpinner(); // استدعاء دالة السبينر هنا
        // Go to the output page after a short delay to show the spinner
        setTimeout(() => {
            window.location.href = "/generate-poetry";
        }, 1000); // تأخير لمدة 1 ثانية
    
        }
    });
});

// async function submitPoemForm(event) {
//     event.preventDefault(); // Prevent default form submission
//     const overlay = document.getElementById('overlay');
//     overlay.style.display = 'flex'; // Show loading overlay

//     const type = document.getElementById('selected-type').value;

//     try {
//         const response = await fetch("/generated-poetry", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded"
//             },
//             body: new URLSearchParams({ type }) // Send the type in the request body
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.text(); // Get the response as text
//         // Redirect to the poetry display page with the generated poem
//         document.open();
//         document.write(data);
//         document.close();
//     } catch (error) {
//         console.error('Error:', error);
//         alert('حدث خطأ أثناء توليد القصيدة. يرجى المحاولة مرة أخرى.');
//     } finally {
//         overlay.style.display = 'none'; // Hide loading overlay
//     }
// }

// function applyTashkeel(poem) {
//     console.log('Applying Tashkeel to poem:', poem);
//     $.getJSON("http://tahadz.com/mishkal/ajaxGet", { text: poem, action: "TashkeelText" });
// }

// $(document).ready(function () {
//     const initialPoem = `{{ generated_poem }}`;
//     applyTashkeel(initialPoem);
// });

function showSpinner() {
    console.log("Spinner is shown");
    document.getElementById('overlay').style.display = 'flex'; 
}

function setType(type) {
    document.getElementById('selected-type').value = type; // تعيين قيمة type
}
