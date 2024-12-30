// لعرض السبانر بعد الضغط على زر الانشاء
function showSpinner() {
    document.getElementById('overlay').style.display = 'flex';
    // Simulate loading for 3 seconds
    setTimeout(() => {
        document.getElementById('overlay').style.display = 'none';
    }, 3000);
}