// Initialize EmailJS
emailjs.init("6bLDjZh590uxLGlTp");

// Handle Form Submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    // Send email using EmailJS
    emailjs.send("service_3nfl7vo", "template_svwo1kr", formData).then(
      function (response) {
        toastr.success("Message sent successfully!"); // Success callback
        (document.getElementById("name").value = ""),
          (document.getElementById("email").value = ""),
          (document.getElementById("message").value = "");
      },
      function (error) {
        toastr.error("Failed to send message: " + error.text); // Error callback
      }
    );
  });
