document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('userForm');

  form.addEventListener('submit', function(event) {
    
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
  
    if (email && name && dob) {
      alert(`Form Submitted! \nName: ${name}\nEmail: ${email}\nDate of Birth: ${dob}`);
    } else {
      event.preventDefault(); 
      alert('Please fill out all fields.');
    }
  });
});
