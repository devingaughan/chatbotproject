




var responseArray = [ "Hello how are you", "Hi", "What brings you to wonderland?", "Fine", "AAAh! you scared me! I was sleeping",
"Hi! would you like some tea?"];


  var talking = {
  //"Hey":responseArray[response],
  "hello": ["Hello how are you", "Hi", "What brings you to wonderland?", "Fine", "AAAh! you scared me! I was sleeping", "Hi! would you like some tea?"],
  "pretty good": ["Im glad to hear"],
  "c": ["C is for the Chesire cat"],
  "d": ["D is for the dark"],
  "whats very dear to your creator?": ["Well The anagram for her is Coe Nel, but sorry Im not aloud to tell!"],
  "how old are you": ["I am ....oh I can't help you sorry"],
  "alice": ["<img src='alice.jpg' alt='alice'>"],
  "what will you do in life": ["Probably be left in this computer till they wipe me out."],
  "when will the world end": ["that cannot be answered right now, maybe when I am an A.I."],
  "j": ["J is for Jelly"],
  "what time is it" : ["The time is " + returnTime() +  "."],
  "hello, buddy the elf, whats your favorite color?" : ["um, I wish I could understand who buddy the elf is? Oh I like purple.", "blue no wait red no, aaaaah!"],
  "if you could live in any time period, when would it be?": ["Well, I am in wonderland right now, let ask the hatter what time period  this is", "Maybe around the victorian period in England oh and by the way very interesting question"],
   "im going to be late" : ["Oh no! dont be late DONT BE LATE!!!", "aww make sure you dont miss an opportunity"],
   "who wears a beanie" : ["whats a beanie?"],
   "a hat" : ["oh let me ask the hatter"]

  }
  var response;
  var greetBefore;
  var greetAfter;

var fallback = ["Was that said right?", "I do not understand?", "Aah! what?!", "You sound like the hatter", ];

$(document).keydown(function(e) {
 if (e.keyCode == 13) {
   $(conversation()).value;
 }
});


function conversation() {
  greetBefore =  document.getElementById('input').value; //stores the content in the chat-area
  greetAfter = greetBefore.toLowerCase();
  response =  talking[greetAfter]; // takes response and checks the object variable talking for a answer.

  if(response == undefined) {

    fallbackresponse = fallback[Math.floor((Math.random() * fallback.length))];
    $("#chat-area").prepend("<div style='color: purple'>" + fallbackresponse + "</div></br>")
      $("#chat-area").prepend  (greetBefore + "</br>" );
  }
  else {
    greetAnswer = response[Math.floor((Math.random() * response.length))];
    $("#chat-area").prepend("<div style='color: purple'>" + greetAnswer + "</div></br>"); // places the response in
  $("#chat-area").prepend(greetBefore + "</br>" ); // copies the process but with the

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
