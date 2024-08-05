let testing = document.getElementById('testing');
let text = document.getElementById('text');
let textVisible = true;

function toggleText() {
    textVisible = !textVisible;
    if (textVisible) {
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    }
}

testing.addEventListener('click', toggleText);