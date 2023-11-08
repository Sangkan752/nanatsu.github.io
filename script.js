const sidebar = document.querySelector('.sidebar');
const menuToggle = document.querySelector('.menu-toggle');

// Tambahkan class 'active' setelah halaman dimuat
window.addEventListener('load', () => {
    sidebar.classList.add('active');
});

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
// Tambahkan class 'show' setelah halaman dimuat
window.addEventListener('load', () => {
  sidebar.classList.add('active');
  const content = document.querySelector('.content');
  content.classList.add('show');
  content.classList.add('animate');
});
