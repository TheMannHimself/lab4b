document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('userForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;

    if (email && phone && dob) {
      alert(`Form Submitted! \nEmail: ${email}\nPhone: ${phone}\nDate of Birth: ${dob}`);
    } else {
      alert('Please fill out all fields.');
    }
  });
});
