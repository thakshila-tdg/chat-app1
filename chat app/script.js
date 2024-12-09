function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const chatBox = document.getElementById("chatBox");

    if (userInput.trim() !== "") {
        // Create user message element
        const userMessage = document.createElement("div");
        userMessage.classList.add("message", "user-message");
        userMessage.innerHTML = `<p>${userInput}</p>`;
        chatBox.appendChild(userMessage);
        document.getElementById("userInput").value = ""; // Clear input box

        // Create bot response element
        const botMessage = document.createElement("div");
        botMessage.classList.add("message", "bot-message");

        // Define possible answers
        let response;
        switch (userInput.toLowerCase().trim()) {
            case "what is the capital of france?":
                response = "The capital of France is Paris.";
                break;
            case "what is the square root of 16?":
                response = "The square root of 16 is 4.";
                break;
            case "who wrote 'romeo and juliet'?":
                response = "William Shakespeare wrote 'Romeo and Juliet'.";
                break;
            case "what is the chemical symbol for water?":
                response = "The chemical symbol for water is H₂O.";
                break;
            case "who painted the mona lisa?":
                response = "The Mona Lisa was painted by Leonardo da Vinci.";
                break;
            case "what is the fastest land animal?":
                response = "The fastest land animal is the Cheetah.";
                break;
            case "what is the square of 7?":
                response = "The square of 7 is 49.";
                break;
            case "who is the first president of the united states?":
                response = "The first president of the United States was George Washington.";
                break;
            case "what is the largest planet in our solar system?":
                response = "The largest planet in our solar system is Jupiter.";
                break;
            default:
                response = "Sorry, I don't know the answer to that.";
        }

        // Set bot message with the response
        botMessage.innerHTML = `<p>${response}</p>`;
        chatBox.appendChild(botMessage);

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
