let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// when clicking on menu icon
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');  // the icon changes to x icon
  navbar.classList.toggle('active');  // display navbar
}

// wait until the entire webpage is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
  // get the form element by its ID
  const form = document.getElementById("contact-form");
  // add an event listener to handle form submission
  form.addEventListener("submit", async function(event) {
      event.preventDefault();
      // create a FormData object to collect form inputs
      const formData = new FormData(form);
      const jsonData = {};
      // convert FormData into a JSON object
      formData.forEach((value, key) => jsonData[key] = value);

      try {
          // send the form data to Formspree via a POST request
          const response = await fetch(form.action, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(jsonData)
          });
          // handle the server response
          if (response.ok) {
              alert("Message sent successfully!");
              form.reset();
          } else {
              alert("Something went wrong. Please try again.");
          }
      } catch (error) {
          alert("Network error. Please check your internet connection.");
      }
  });
});
