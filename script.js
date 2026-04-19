const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatWindow = document.getElementById('chatWindow');
const musicPlayer = document.getElementById('musicPlayer');
const audioElement = document.getElementById('audioElement');
const songName = document.getElementById('songName');

function handleResponse() {
    const text = userInput.value.trim().toLowerCase();
    if (text !== "") {
        // User's Message
        chatWindow.innerHTML += `<div class="message user-msg">${userInput.value}</div>`;
        
        let response = "";
        
        // YouTube No-Copyright Logic
        if (text.includes("gana") || text.includes("song") || text.includes("music")) {
            response = "निश्चित रूप से! यहाँ एक **No-Copyright Lofi Beat** है जिसे आप अपने YouTube वीडियो में इस्तेमाल कर सकते हैं। आप इसे नीचे प्लेयर में सुन सकते हैं।";
            
            // Sample No-Copyright Link (Aap yahan apni file ka link daal sakte hain)
            audioElement.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; 
            musicPlayer.style.display = "block";
            songName.innerText = "Playing: YouTube Safe Lofi Beat";
            audioElement.play();
        } else {
            response = "मैं आपकी कैसे मदद कर सकता हूँ? मैं आपके लिए थंबनेल आईडिया या वीडियो स्क्रिप्ट भी लिख सकता हूँ।";
        }

        setTimeout(() => {
            chatWindow.innerHTML += `<div class="message ai-msg">${response}</div>`;
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }, 1000);

        userInput.value = "";
    }
}

sendBtn.onclick = handleResponse;
userInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') { e.preventDefault(); handleResponse(); } });

