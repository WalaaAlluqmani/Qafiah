
    // الحصول على الزر الأخير وزر الاختيار
    const createButton = document.querySelector('.material-btn-last');
    const buttons = document.querySelectorAll('.material-btn');

    // تعطيل الزر افتراضيًا
    createButton.disabled = true;

    // متغير لتتبع حالة الاختيار
    let isTypeSelected = false;

    // إضافة حدث عند الضغط على أي زر من الأنواع
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // إزالة الفئة "selected" من جميع الأزرار
            buttons.forEach(btn => btn.classList.remove('selected'));

            // إضافة الفئة "selected" للزر الذي تم الضغط عليه
            this.classList.add('selected');

            // تفعيل الزر "إنشئ قصيدتك"
            isTypeSelected = true;
            createButton.disabled = false; // تفعيل الزر
        });
    });

    // التأكد عند الضغط على الزر الأخير إذا لم يتم اختيار نوع
    createButton.addEventListener('click', function (event) {
        if (!isTypeSelected) {
            alert('يرجى اختيار نوع قبل إنشاء القصيدة!');
            event.preventDefault(); // منع الإجراء
            
        }

    });

