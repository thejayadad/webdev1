const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const closeBtn = document.getElementById('close');

gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        lightbox.style.display = 'block';
        lightboxContent.src = e.target.src;
    }
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
