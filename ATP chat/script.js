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
        
        if (lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hello")) {
            simulateAIMessage("Hi there!");
        } else if (lowerCaseMessage.includes("how are you")) {
            simulateAIMessage("I'm just a chatbot, but I'm here to help!");
        } else if (lowerCaseMessage.includes("who owns atp chat") || lowerCaseMessage.includes("who onws ATP chat") || lowerCaseMessage.includes("who programmed you")) {
            simulateAIMessage("Asser the programmer is a programmer interests in programming, animations and marketing.");
        } else if (lowerCaseMessage.includes("numbers from 1-10")) {
            simulateAIMessage("1,2,3,4,5,6,7,8,9,10.");
         } else if (lowerCaseMessage.includes("asser") || lowerCaseMessage.includes("asser mohammed")) {
                simulateAIMessage("he is ATP chat owner");
            } else if (lowerCaseMessage.includes("what is the capital of france")) {
                simulateAIMessage("The capital of France is Paris.");
            } else if (lowerCaseMessage.includes("what is the highest mountain at the world")) {
                simulateAIMessage("Mount Everest is the highest mountain in the world.");
        } else {
            simulateAIMessage("I'm sorry, I didn't understand that.");
        }
    }
});