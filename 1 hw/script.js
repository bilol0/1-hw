document.addEventListener("DOMContentLoaded", function() {
  const urlInput = document.getElementById('urlInput');
  const emailInput = document.getElementById('emailInput');
  const validateButton = document.getElementById('validateButton');

  validateButton.addEventListener('click', function() {
      const urlValue = urlInput.value.trim();
      const emailValue = emailInput.value.trim();

      
      if (isValidURL(urlValue)) {
          urlInput.classList.remove('invalid');
          urlInput.classList.add('valid');
      } else {
          urlInput.classList.remove('valid');
          urlInput.classList.add('invalid');
      }

      
      if (isValidEmail(emailValue)) {
          emailInput.classList.remove('invalid');
          emailInput.classList.add('valid');
      } else {
          emailInput.classList.remove('valid');
          emailInput.classList.add('invalid');
      }
  });

  function isValidURL(url) {
      const urlRegex = /^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[\w\-.,@?^=%&:/~+#]*$/;
      return urlRegex.test(url);
  }

  function isValidEmail(email) {
      const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
      return emailRegex.test(email);
  }
});