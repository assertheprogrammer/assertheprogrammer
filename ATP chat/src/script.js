document.addEventListener("DOMContentLoaded", function() {
    const chatLog = document.getElementById("chatLog");
    const userInput = document.getElementById("userInput");
    const sendButton = document.getElementById("sendButton");

    sendButton.addEventListener("click", function() {
        const userMessage = userInput.value;
        if (userMessage.trim() === "") return;

        appendMessage(userMessage, "user-message");
        processUserMessage(userMessage);
        userInput.value = "";
    });

    function appendMessage(message, className) {
        const messageElement = document.createElement("div");
        messageElement.textContent = message;
        messageElement.classList.add("chat-entry", className);
        chatLog.appendChild(messageElement);

    }
    

    function simulateAIMessage(message) {
        appendMessage(message, "ai-message");
    }

    function processUserMessage(message) {
        const lowerCaseMessage = message.toLowerCase();
        
        
    }
});
