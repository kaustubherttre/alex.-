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
    
    if(message.includes('symptoms')){
        
        const alexa1=corona[0];
        speech.text=alexa1;
        url="https://www.google.com/search?sxsrf=ALeKk00Pqq043P6gRtPFiKFnvg11kfXtNA%3A1582350615174&ei=F8FQXsmZCrqQ4-EPgbqk8A0&q=give+information+about+corona+virus&oq=give+information+about+corona+virus&gs_l=psy-ab.3...41111.51510..51713...2.1..0.118.2291.19j8......0....1..gws-wiz.......0i71j35i39j0i131i67j0i131j0i67j0j0i273j0i70i255j33i22i29i30.XWUq18rlWEM&ved=0ahUKEwiJgc-yu-TnAhU6yDgGHQEdCd4Q4dUDCAs&uact=5";
        window.open(url);
    }

     
    
    
    speech.volume=1;
    speech.rate=1.2;
    speech.pitch= 10;
    
    window.speechSynthesis.speak(speech);
}
