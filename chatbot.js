




var responseArray = [ "Hello how are you", "Hi", "What brings you to wonderland?", "Fine", "AAAh! you scared me! I was sleeping",
"Hi! would you like some tea?"];


  var talking = {
  "Hey": responseArray[Math.floor(Math.random() * responseArray.length)],
  "Pretty good": "Im glad to hear" ,
  "C": "C is for the Chesire cat",
  "D": "D is for the dark",
  "E": 4,
  "How old are you": "I am ....oh I can't help you sorry",
  "Alice": "http://orig05.deviantart.net/c731/f/2015/074/0/5/alice_in_wonderland_chibi_by_starmasayume-d8hgr37.jpg",
  "What will you do in life": "Probably be left in this computer till they wipe me out.",
  "When will the world end": "that cannot be answered right now, maybe when I am an A.I.",
  "J": "J is for Jelly",
  "what time is it" : "The time is " + returnTime() +  "."
  }
  var response;
  var greet;



function conversation() {
  greet =  document.getElementById('input').value; //stores the content in the chat-area
  response =  talking[greet]; // takes response and checks the object variable talking for a answer.
  $("#chat-area").prepend("<div style='color: purple'>" + response + "</div></br>"); // places the response in
$("#chat-area").prepend  ( greet + "</br>" ); // copies the process but with the
document.getElementById('input').value = "";
}

function returnTime() {
var d = new Date(Date.now());
var hours = d.getHours();
var minutes = d.getMinutes();
var n = hours + ":" + minutes;
return n;
}
