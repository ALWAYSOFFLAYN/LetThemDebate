// script.js
document.addEventListener('DOMContentLoaded', function() {
    const okButtons = document.querySelectorAll('button[id^="ok"]');
    const inputFields = document.querySelectorAll('input[id^="input"]');
    const outputBoxes = document.querySelectorAll('div[id^="output"]');
    const retryButtons = document.querySelectorAll('button[id^="retry"]');

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
                    } else {
                        output.textContent = 'Invalid API';
                    }
                })
                .catch(error => {
                    output.textContent = 'Error: ' + error.message;
                });
        });
    });

    retryButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const input = inputFields[index];
            const ok = okButtons[index];

            // Re-enable the button and input field
            ok.disabled = false;
            ok.classList.remove('disabled');
            input.disabled = false;
        });
    });
});