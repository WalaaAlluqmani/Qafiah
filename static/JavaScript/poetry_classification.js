// document.addEventListener("DOMContentLoaded", function () {
//     const classifyButton = document.querySelector(".material-btn-last"); // زر التصنيف
//     const textField = document.querySelector(".text-field"); // حقل إدخال القصيدة

//     classifyButton.disabled = true;


//     // إضافة مستمع حدث الإدخال
//     textField.addEventListener('input', function () {
//         if (textField.value.trim() !== "") { // التحقق إذا كان النص غير فارغ
//             classifyButton.disabled = false;
//         } else {
//             classifyButton.disabled = false;
//             classifyButton.addEventListener("click", function () {
//                 alert("الرجاء إدخال القصيدة قبل التصنيف!");
//                 classifyButton.disabled = true;
//             });
            
//         }
//     });

 
// });





document.addEventListener("DOMContentLoaded", function () {
    const classifyButton = document.querySelector(".material-btn-last"); // زر التصنيف
    const textField = document.querySelector(".text-field"); // حقل إدخال القصيدة

    // عند تحميل الصفحة، اجعل الزر يبدو غير نشط
    classifyButton.classList.add("disabled");

    // إضافة مستمع حدث الإدخال
    textField.addEventListener("input", function () {
        if (textField.value.trim() !== "") { 
            classifyButton.classList.remove("disabled"); // إزالة الكلاس عند وجود نص
        } else {
            classifyButton.classList.add("disabled"); // إضافة الكلاس عند كون الحقل فارغًا
        }
    });

    // عند الضغط على الزر، تأكد من أن الحقل ليس فارغًا
    classifyButton.addEventListener("click", function (event) {
        if (textField.value.trim() === "") {
            alert("الرجاء إدخال القصيدة قبل التصنيف!");
            event.preventDefault(); // يمنع أي إجراء إضافي
        } else {
            console.log("يتم التصنيف الآن..."); // استبدل هذا بالإجراء المطلوب
        }
    });
});











   // classifyButton.addEventListener("click", function () {
    //     if (textField.value.trim() === "") { // التحقق إذا كان النص فارغًا
    //         alert("الرجاء إدخال القصيدة قبل التصنيف!");
    //     } else {
    //         classifyButton.disabled = false;
    //         console.log("تم إرسال القصيدة للتصنيف:", textField.value);
    //         // هنا يمكن إرسال النص للمودل أو أي عملية أخرى
    //     }
    // });



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


