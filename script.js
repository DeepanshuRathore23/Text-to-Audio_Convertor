//working of Listen button

let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name,i)));
}

voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value];
})

document.querySelector("button").addEventListener("click",()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

//working of speak button
click_to_convert.addEventListener('click',function(){
    
    window.speechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result', e=>{
        const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)

        convert_text.innerHTML = transcript; 

    })
    
    
        recognition.start();
    
})