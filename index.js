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
        Toastify({
          text: "Message sent successfully!",
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "#4caf50",
        }).showToast(); // Success callback
        (document.getElementById("name").value = ""),
          (document.getElementById("email").value = ""),
          (document.getElementById("message").value = "");
      },
      function (error) {
        Toastify({
          text: "Message was not sent. Something went wrong!!!",
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast(); // Error callback
      }
    );
  });
