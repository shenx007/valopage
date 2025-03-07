const slider = document.querySelector('.slider');

// Pause rotation on hover
slider.addEventListener('mouseenter', () => {
    slider.style.animationPlayState = 'paused';
});

// Resume rotation on mouse leave
slider.addEventListener('mouseleave', () => {
    slider.style.animationPlayState = 'running';
});

// Chatbot Elements
const chatbotContainer = document.querySelector('.chatbot-container');
const chatbotToggle = document.getElementById('chatbot-toggle');
const closeChatbot = document.getElementById('close-chatbot');
const chatbotMessages = document.querySelector('.chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const sendMessageButton = document.getElementById('send-message');

// Toggle Chatbot
chatbotToggle.addEventListener('click', () => {
    chatbotContainer.classList.toggle('active');
});

// Close Chatbot
closeChatbot.addEventListener('click', () => {
    chatbotContainer.classList.remove('active');
});

// Send Message
sendMessageButton.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userMessage = chatbotInput.value.trim();
    if (userMessage) {
        // Add user message to chat
        addMessage(userMessage, 'user');
        chatbotInput.value = '';

        // Simulate bot response
        setTimeout(() => {
            const botMessage = getBotResponse(userMessage);
            addMessage(botMessage, 'bot');
        }, 500);
    }
}

function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Scroll to bottom
}

function getBotResponse(userMessage) {
    // Simple bot responses
    const responses = {
        "hello": "Hi there! How can I help you?",
        "how are you": "I'm just a bot, but I'm doing great! How about you?",
        "what is your name": "I'm your friendly website chatbot!",
        "bye": "Goodbye! Have a great day!",
    };

    // Default response
    return responses[userMessage.toLowerCase()] || "I'm sorry, I didn't understand that.";
}