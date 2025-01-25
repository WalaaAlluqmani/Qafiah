document.addEventListener("DOMContentLoaded", function () {
    const createButton = document.querySelector('.material-btn-last');
    const buttons = document.querySelectorAll('.material-btn');

    // عند تحميل الصفحة، اجعل زر "انشئ قصيدتك" غير مفعل
    createButton.classList.add("disabled");

    // متغير لتعقب حالة الاختيار
    let isTypeSelected = false;

    // حدث عند الضغط على أي زر من الأزرار
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // إزالة الفئة "selected" من جميع الأزرار
            buttons.forEach(btn => btn.classList.remove('selected'));
            // إضافة الفئة "selected" للزر المحدد
            this.classList.add('selected');
            // تعيين النوع
            const type = this.textContent; // أو يمكنك تعيينه مباشرة
            setType(type); // تعيين القيمة
            // تفعيل الزر "انشئ قصيدتك"
            isTypeSelected = true;
            createButton.classList.remove("disabled");
        });
    });

    // تحقق عند الضغط على زر "انشئ قصيدتك" إذا لم يتم اختيار نوع
    createButton.addEventListener('click', function (event) {
        if (!isTypeSelected) {
            alert("يرجى إختيار النوع قبل إنشاء القصيدة !!!");
            event.preventDefault();
        } else {
            showSpinner(); // استدعاء دالة السبينر هنا
            // الانتقال إلى صفحة الإخراج بعد تأخير قصير لعرض السبينر
            setTimeout(() => {
                document.getElementById('form').submit(); // تقديم النموذج هنا
            }, 1000); // تأخير لمدة 1 ثانية
        }
    });
});

function showSpinner() {
    console.log("Spinner is shown");
    document.getElementById('overlay').style.display = 'flex'; 
}

function setType(type) {
    console.log("Selected type:", type);
    document.getElementById('selected-type').value = type; // تعيين قيمة type
}