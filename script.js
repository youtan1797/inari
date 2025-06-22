document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.open-volunteer');
  const box = document.querySelector('.volunteer-box');

  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    box.classList.toggle('hidden');
  });
});
