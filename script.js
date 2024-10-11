document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('userForm');

  form.addEventListener('submit', function(event) {
    

    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;


     if (!isValidAge(dob)) {
      event.preventDefault(); 
      alert('You must be at least 18 years old to submit this form.');
    }
  });

  
    if (email && phone && dob) {
      alert(`Form Submitted! \nEmail: ${email}\nPhone: ${phone}\nDate of Birth: ${dob}`);
    } else {
      event.preventDefault(); 
      alert('Please fill out all fields.');
    }
  });
// Function to check if the user is 18 or older
  function isValidAge(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    // Check if the user hasn't had their birthday yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1 >= 18;
    }
    return age >= 18;
  }
});
});
