// Function to change text content dynamically
function changeText() {
    const textElement = document.getElementById('dynamicText');
    const texts = [
        'Hello, DOM manipulation is fun!',
        'JavaScript makes web pages interactive!',
        'You can change text dynamically!'
    ];
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    textElement.textContent = randomText;
}

// Function to toggle highlight style
function toggleHighlight() {
    const textElement = document.getElementById('styleText');
    textElement.classList.toggle('highlight');
}

// Function to toggle element
function toggleElement() {
    const container = document.getElementById('elementContainer');
    const existingElement = container.querySelector('.dynamic-element');
    
    if (existingElement) {
        container.removeChild(existingElement);
    } else {
        const newElement = document.createElement('div');
        newElement.className = 'dynamic-element';
        newElement.style.padding = '10px';
        newElement.style.margin = '10px 0';
        newElement.style.backgroundColor = '#f0f0f0';
        newElement.textContent = 'This is a dynamically added element!';
        container.appendChild(newElement);
    }
}