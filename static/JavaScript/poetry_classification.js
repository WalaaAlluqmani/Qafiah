document.addEventListener("DOMContentLoaded", function () {
    const classifyButton = document.querySelector(".material-btn-last"); // زر التصنيف
    const textField = document.querySelector(".text-field"); // حقل إدخال القصيدة

    classifyButton.addEventListener("click", function () {
        if (textField.value.trim() === "") { // التحقق إذا كان النص فارغًا
            alert("الرجاء إدخال القصيدة قبل التصنيف!");
        } else {
            console.log("تم إرسال القصيدة للتصنيف:", textField.value);
            // هنا يمكن إرسال النص للمودل أو أي عملية أخرى
        }
    });
});
