const btn=document.querySelector('.Salt-master');
const content = document.querySelector('.whatusaid');
const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition= new SpeechRecognition();
const greetings=['Im good you little turd',
                'Just because you dont have friends you made me so other than asking me how iam, why dont you step out of the room and look what real people do'
                ,'Even when im going shitty its better than you'];
const weather=['You should hope that is raining, fucking non a c room scumbag'];
const ff=['Even when i cant see you your ugliness is resonating around this device'];
const time=['Its time for you to kill yourself, you lonely peice of shit'];
const pizza=['you are like a food incenerator'];
const vit=['its a shithole'];
const jail=['jai,mathaa dee'];
const sp=['This is for my girl meghna, i love you'];
const hi=['Im not your assistant use google for this gay shit',' noob'];
 

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
    speech.text="sorry my programmer isn't that good so the word you said is not in my vocabulary";
    if(message.includes('how are you')){

       const final= greetings[Math.floor(Math.random() *3)];
       speech.text=final;
    }
    if(message.includes('weather')){

        const finalweather= weather[0];
        speech.text=finalweather;
    }
    if(message.includes('how do I look')){

        const finallook= ff[0];
        speech.text=finallook;
    }
    if(message.includes('time')){

        const finaltime= time[0];
        speech.text=finaltime;
    }
    if(message.includes('pizza')){

        const finaltiame= pizza[0];
        speech.text=finaltiame;
    }
    if(message.includes('VIT')){

        const finaltiasme= vit[0];
        speech.text=finaltiasme;
    }
    
     if(message.includes('special message')){
        const his= sp[0];
       speech.text=sp;
    }
    if(message.includes('hello')){
        const his= hi[0];
       speech.text=his;
    }
   if(message.includes('hi')){
        const his= hi[0];
       speech.text=his;
    }
    
    
    
    speech.volume=1;
    speech.rate=1;
    speech.pitch= 1;
    
    window.speechSynthesis.speak(speech);
}
