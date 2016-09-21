
  var talking = {
  "Hey": "Hello how are you",
  "Pretty good": "Im glad to hear" ,
  "C": "C is for the Chesire caat",
  "D": "D is for the dark",
  "E": 4,
  "F": 5,
  "G": 6,
  "H": 7,
  "I": 8,
  "J": "J is for Jelly"
  }
  var response;
  var greet;



function conversation() {

  document.getElementById('chat-area').textContent = response = talking[greet];
  greet =  document.getElementById('input').value;

  $("#chat-area").prepend($("response"));


$("#chat-area").append($("talking"));


}
