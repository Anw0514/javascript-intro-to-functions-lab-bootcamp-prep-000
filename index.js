function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(speech) {
  console.log(speech.toLowerCase());
}

function sayHiToGrandma(speech){
  var lowercase = "hello";
  var uppercase = "HELLO";
  if (lowercase.toLowerCase() === lowercase) {
    return "I can\'t hear you!";
    }
  else if (uppercase.toUpperCase() === uppercase) {
    return "YES INDEED!";
  }
  
}




