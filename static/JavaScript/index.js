
function scrollToSection() {
    const section = document.getElementById('section2');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); // انتقال سلس إلى القسم
    }
}
