// Basic handling of the contact form submission
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const message = document.getElementById('form-message');
    if (message) {
      message.classList.remove('hidden');
    }
    form.reset();
  });
}
