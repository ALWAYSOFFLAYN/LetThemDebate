document.addEventListener('DOMContentLoaded', function() {
    const okButtons = document.querySelectorAll('button[id^="ok"]');
    const inputFields = document.querySelectorAll('input[id^="input"]');
    const outputBoxes = document.querySelectorAll('div[id^="output"]');
    const retryButtons = document.querySelectorAll('button[id^="retry"]');
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notification-message');
    const notificationClose = document.getElementById('notification-close');
    const topicInput = document.getElementById('topic');

    okButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const input = inputFields[index];
            const output = outputBoxes[index];
            const retry = retryButtons[index];

            // Disable the button and input field
            button.disabled = true;
            button.classList.add('disabled');
            input.disabled = true;

            // Use a proxy server to bypass CORS restrictions
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            const url = input.value;

            // Send a request to the provided link via the proxy
            fetch(proxyUrl + url)
                .then(response => {
                    if (response.ok) {
                        output.textContent = 'Correct API';
                        // Hide the retry button if the API is correct
                        retry.style.display = 'none';
                    } else {
                        output.textContent = 'Invalid API';
                        // Show the pop-up notification
                        notificationMessage.textContent = 'Invalid API. Please check the URL and try again.';
                        notification.style.display = 'block';
                        // Show the retry button if the API is invalid
                        retry.style.display = 'block';
                    }
                })
                .catch(error => {
                    output.textContent = 'Error: ' + error.message;
                    // Show the pop-up notification
                    notificationMessage.textContent = 'An error occurred. Please check the URL and try again.';
                    notification.style.display = 'block';
                    // Show the retry button if there is an error
                    retry.style.display = 'block';
                });
        });
    });

    retryButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const input = inputFields[index];
            const ok = okButtons[index];

            /* Re-enable the button and input field */
            ok.disabled = false;
            ok.classList.remove('disabled');
            input.disabled = false;

            /* Hide the retry button after clicking it */
            button.style.display = 'none';
        });
    });

    // Handle Enter key press in the topic input field
    topicInput.addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            event.preventDefault();

            // Disable the topic input field
            topicInput.disabled = true;

            // Get the topic value
            const topic = topicInput.value;

            // Send a request to the backend server
            const data = {
                topic: topic
            };

            fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.result) {
                        // Handle the result from the API call
                        console.log(data.result);
                    } else {
                        // Handle errors
                        console.error(data.error);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    });

    // Close the notification when the close button is clicked
    notificationClose.addEventListener('click', function() {
        notification.style.display = 'none';
    });
});