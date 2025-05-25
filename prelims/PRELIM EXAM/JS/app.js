let currentIndex = 0;
const images = document.querySelectorAll('.img-gallery img');
const dots = document.querySelectorAll('.dots .btn');

document.getElementById('nxt-btn').addEventListener('click', () => {
    changeImage(1);
});

document.getElementById('prv-btn').addEventListener('click', () => {
    changeImage(-1);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        console.log(`Dot ${index} clicked`);
        showImage(index);
    });
});

function changeImage(direction) {
    images[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + direction + images.length) % images.length;

    console.log(`Current Index: ${currentIndex}`);

    images[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

function showImage(index) {
    images[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');

    currentIndex = index;

    console.log(`Showing Image Index: ${currentIndex}`);

    images[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}
