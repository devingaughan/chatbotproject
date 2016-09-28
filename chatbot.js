




var responseArray = [ "Hello how are you", "Hi", "What brings you to wonderland?", "Fine", "AAAh! you scared me! I was sleeping",
"Hi! would you like some tea?"];


  var talking = {
  //"Hey":responseArray[response],
  "hello": [ "Hello how are you", "Hi", "What brings you to wonderland?", "Fine", "AAAh! you scared me! I was sleeping",
  "Hi! would you like some tea?"],
  "Pretty good": ["Im glad to hear"],
  "C": ["C is for the Chesire cat"],
  "D": ["D is for the dark"],
  "Whats very dear to your creator?": ["Well The anagram for her is Coe Nel, but sorry Im not aloud to tell!"],
  "How old are you": ["I am ....oh I can't help you sorry"],
  "Alice": ["<img src='alice.jpg' alt='alice'>"],
  "What will you do in life": ["Probably be left in this computer till they wipe me out."],
  "When will the world end": ["that cannot be answered right now, maybe when I am an A.I."],
  "J": ["J is for Jelly"],
  "what time is it" : ["The time is " + returnTime() +  "."]
  }
  var response;
  var greet;

var fallback = ["Was that said right?", "I do not understand?", "Aah! what?!", "You sound like the hatter", ];




function conversation() {
  greet =  document.getElementById('input').value; //stores the content in the chat-area
  response =  talking[greet]; // takes response and checks the object variable talking for a answer.

  if(response == undefined) {

    fallbackresponse = fallback[Math.floor((Math.random() * fallback.length))];
    $("#chat-area").prepend("<div style='color: purple'>" + fallbackresponse + "</div></br>")
      $("#chat-area").prepend  ( greet + "</br>" );
  }
  else {
    greetAnswer = response[Math.floor((Math.random() * response.length))];
    $("#chat-area").prepend("<div style='color: purple'>" + greetAnswer + "</div></br>"); // places the response in
  $("#chat-area").prepend  ( greet + "</br>" ); // copies the process but with the

  }
    document.getElementById('input').value = "";






}

function returnTime() {
var d = new Date(Date.now());
var hours = d.getHours();
var minutes = d.getMinutes();
var n = hours + ":" + minutes;
return n;
}
