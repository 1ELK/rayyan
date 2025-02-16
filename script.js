function checkResolution() {
    var column3 = document.getElementById('column3');
    var avatar = document.getElementById('avatar');
    if (window.innerWidth <= 768) { // Assuming mobile resolution is 768px or less
        column3.style.display = 'none';
        avatar.style.display = 'none';
    } else {
        column3.style.display = 'block';
        avatar.style.display = 'block';
    }
    }

    window.addEventListener('resize', checkResolution);
    window.addEventListener('load', checkResolution);