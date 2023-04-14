let typingTest = document.getElementById('speedTypingTest');
let timer = document.getElementById('timer');
let quoteDisplay = document.getElementById('quoteDisplay');
let result = document.getElementById('result');
let quoteInput = document.getElementById('quoteInput');
let submitBtn = document.getElementById('submitBtn');
let resetBtn = document.getElementById('resetBtn');
let spinner = document.getElementById('spinner');
let count = 0;
let intervalId;

function displayTest() {
    spinner.classList.add('d-none');
    typingTest.classList.remove('d-none');
    let url = 'https://apis.ccbp.in/random-quote';
    let options = {
        method: 'GET'
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsondata) {
            console.log(jsondata);
            quoteDisplay.textContent = jsondata.content;
        });
    intervalId = setInterval(function() {
        timer.textContent = count + 1;
        timer.classList.add('time');
        count += 1;
    }, 1000);
}

displayTest();
submitBtn.addEventListener('click', function() {
    if (quoteInput.value === '' || quoteInput.value !== quoteDisplay.textContent) {
        result.textContent = 'You typed incorrect sentence';
    } else {
        clearInterval(intervalId);
        result.textContent = 'You typed in ' + timer.textContent + ' seconds';
    }
});

resetBtn.addEventListener('click', function() {
    count = 0;
    timer.textContent = '0';
    quoteDisplay.textContent = '';
    quoteInput.value = '';
    result.textContent = '';
    spinner.classList.remove('d-none');
    typingTest.classList.add('d-none');
    displayTest();

});