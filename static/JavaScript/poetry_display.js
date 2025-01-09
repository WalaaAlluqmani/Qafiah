// To display the spanner after pressing the create button
function showSpinner() {
    document.getElementById('overlay').style.display = 'flex';
    // Simulate loading for 3 seconds
    setTimeout(() => {
        document.getElementById('overlay').style.display = 'none';
    }, 3000);
}