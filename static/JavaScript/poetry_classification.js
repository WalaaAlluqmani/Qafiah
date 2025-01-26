// document.addEventListener("DOMContentLoaded", function () {
//     const classifyButton = document.querySelector(".material-btn-last");
//     const textField = document.querySelector(".text-field");

//     // When the page loads, make the button appear inactive
//     classifyButton.classList.add("disabled");

//     // An input event listener
//     textField.addEventListener("input", function () {
//         if (textField.value.trim() !== "") {
//             // Remove class when there is a text in the field
//             classifyButton.classList.remove("disabled");
            
//         } else {
//             // Add class when field is empty
//             classifyButton.classList.add("disabled");
//         }
//     });

//     // A button event listener
//     classifyButton.addEventListener("click", function (event) {
//         if (textField.value.trim() === "") {
//             alert("الرجاء إدخال القصيدة قبل التصنيف !!!");
//             event.preventDefault();
//         } else {
//             //here classification occures 
//         }
//     });
// });


// function submitPoem() {
//     const poem = document.getElementById('poem').value;

//     fetch('/classification_poetry', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ poem: poem }), // تحويل البيانات إلى JSON
//     })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json(); // تحويل الاستجابة إلى JSON
//         })
//         .then(data => {
//             document.getElementById('result').innerText = "نوع القصيدة: " + data.result;
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             document.getElementById('result').innerText = 'حدث خطأ أثناء تصنيف القصيدة.';
//         });
// }