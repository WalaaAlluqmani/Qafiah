function showSpinner() {
    document.getElementById('overlay').style.display = 'flex';
}

// async function regeneratePoem() {
//     console.log('Regenerate poem button clicked.');
//     const overlay = document.getElementById('overlay');
//     overlay.style.display = 'flex';

//     const poemType = document.getElementById('type').value;
//     console.log('Selected type:', poemType);

//     try {
//         const response = await fetch('/generate-poetry', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             body: new URLSearchParams({ type: poemType })
//         });

//         console.log('Response status:', response.status);

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.text();
//         console.log('Generated poem:', data);

//         // تحقق مما إذا كانت الاستجابة تحتوي على HTML
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(data, 'text/html');
//         const poemText = doc.querySelector('#generatedpoem') ? doc.querySelector('#generatedpoem').textContent : data;

//         const generatedPoemElement = document.getElementById('generatedpoem');
//         if (generatedPoemElement) {
//             applyTashkeel(poemText); 
//             generatedPoemElement.textContent = poemText; // تحديث النص
//             // applyTashkeel(poemText); // تطبيق التشكيل على النص
//         } else {
//             console.error('Element with id "generatedpoem" not found.');
//         }

//     } catch (error) {
//         console.error('Error:', error.message);
//         alert('حدث خطأ أثناء توليد القصيدة. يرجى المحاولة مرة أخرى.');
//     } finally {
//         overlay.style.display = 'none'; // إخفاء السبانر بعد انتهاء التحميل
//     }
// }
// function applyTashkeel(poem) {
//     console.log('Applying Tashkeel to poem:', poem);
//     $.getJSON("http://tahadz.com/mishkal/ajaxGet", { text: poem, action: "TashkeelText" },
//         function (data) {
//             console.log('Tashkeel result:', data.result);
//             $("#generatedpoem").text(data.result);
//         });
// }

// $(document).ready(function () {
//     const initialPoem = `{{ generated_poem }}`;
//     applyTashkeel(initialPoem);
// });