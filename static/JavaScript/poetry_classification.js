document.addEventListener("DOMContentLoaded", function () {
    const classifyButton = document.querySelector(".material-btn-last");
    const textField = document.querySelector(".text-field");

    // When the page loads, make the button appear inactive
    classifyButton.classList.add("disabled");

    // An input event listener
    textField.addEventListener("input", function () {
        if (textField.value.trim() !== "") {
            // Remove class when there is a text in the field
            classifyButton.classList.remove("disabled");
        } else {
            // Add class when field is empty
            classifyButton.classList.add("disabled");
        }
    });

    // A button event listener
    classifyButton.addEventListener("click", function (event) {
        if (textField.value.trim() === "") {
            alert("الرجاء إدخال القصيدة قبل التصنيف !!!");
            event.preventDefault();
        } else {
            //here classification occures 
        }
    });
});