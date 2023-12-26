//Progress bar
const progress = document.querySelector('.progress-done');
const progress1 = document.querySelector('.progress-done1');
const progress2 = document.querySelector('.progress-done2');
progress.style.width = progress.getAttribute('data-done') + '%';
progress1.style.width = progress1.getAttribute('data-done') + '%';
progress2.style.width = progress2.getAttribute('data-done') + '%';
progress.style.opacity = 1;
progress1.style.opacity = 1;
progress2.style.opacity = 1;