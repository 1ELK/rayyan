function checkResolution() {
    var column3 = document.getElementById('column3');
    var avatar = document.getElementById('avatar');

    if (window.innerWidth <= 768) {
        column3.style.display = 'none';
    } else {
        column3.style.display = 'block';
    }
}

// Check resolution on load and resize
window.addEventListener('resize', checkResolution);
window.addEventListener('load', checkResolution);
