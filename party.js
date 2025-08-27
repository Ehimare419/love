document.getElementById("rsvpForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
  
    if (name && email) {
      document.getElementById("successMessage").classList.remove("hidden");
      this.reset();
    }
  });
  