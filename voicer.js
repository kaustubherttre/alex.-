const btn=document.querySelector('.Salt-master');
const content = document.querySelector('.whatusaid');
const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition= new SpeechRecognition();

const weather=['Opening temperature Information'];

const hospitals=['Opening the list of Hospitals near you'];
const corona=['Opening information on corona virus'];

 

recognition.onstart= function(){
    console.log('voice is activated');

};
recognition.onresult=function(event){
    const current=event.resultIndex;
    const transcript=event.results[current][0].transcript;
    content.textContent=transcript;
    readOutLoud(transcript);
};
btn.addEventListener('click',()=> {recognition.start()});   
function readOutLoud(message){
    
    const speech= new SpeechSynthesisUtterance();
    speech.text="This is not a recognzied sentence";
    if(message.includes('how are you')){

       const final= greetings[Math.floor(Math.random() *3)];
       speech.text=final;
    }
    if(message.includes('weather')){

        const finalweather= weather[0];
        speech.text=finalweather;
        url="https://www.google.com/search?q=how+is+the+weather&oq=how+is+the+&aqs=chrome.1.69i57j0l7.3116j1j7&sourceid=chrome&ie=UTF-8";
        window.open(url);
    }
    if(message.includes('hospitals')){

        const alexa1=hospitals[0];
        speech.text=alexa1;
        url="https://www.google.com/search?q=hospitals+near+me&oq=hospitals+&aqs=chrome.0.0j69i57j0l6.3686j0j7&sourceid=chrome&ie=UTF-8";
        window.open(url);
    }
    
    if(message.includes('information')){
        
        const alexa1=corona[0];
        speech.text=alexa1;
        url="https://www.google.com/search?q=information+on+coronavirus&oq=information+on+corora&aqs=chrome.2.69i57j0l7.14395j0j7&sourceid=chrome&ie=UTF-8";
        window.open(url);
    }

     
    
    
    speech.volume=1;
    speech.rate=1.2;
    speech.pitch= 10;
    
    window.speechSynthesis.speak(speech);
}
