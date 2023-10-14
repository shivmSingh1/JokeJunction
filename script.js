let ProgramJoke=document.getElementById("ProgramJoke");
ProgramJoke.style.color="red";
let JokeText=[
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
    "Why did the developer go broke? Because he used up all his cache.",
    "Why don't programmers like nature? It has too many bugs.",
    "How do you comfort a JavaScript bug? You console it.",
    "Why do Java developers wear glasses? Because they don't see sharp.",
    "Why did the JavaScript developer go broke? Because he lost his keys(null).",
    "Why do programmers prefer iOS development over Android development? Because it's more 'app'ealing.",
    "Why did the computer keep freezing? Because it left its Windows open.",
    "Why did the SQL query go to therapy? It had too many relationship issues.",
    "Why did the developer stay in bed all day? They had a bit of a code fever.",
    "Why did the programmer quit his job? He didn't get arrays.",
    "Why don't programmers like to go outside? The sun causes too many reflections.",
    "What's a web developer's favorite tea? URL Grey.",
    "What's a programmer's favorite place in New York? The Big Apple.",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "Why did the math book sad? It had too many problems.",
    "Why was the JavaScript developer sad? Because they didn't 'null' their feelings.",
    "Why do programmers have trouble finding a date? Because they're too busy making dates.",
    "Why did the developer go broke? Because he used up all his cache.",
    "Why don't programmers like nature? It has too many bugs.",
    "How do you comfort a JavaScript bug? You console it.",
    "Why do Java developers wear glasses? Because they don't see sharp.",
    "Why was the JavaScript developer sad? Because they didn't 'null' their feelings.",
    "Why do programmers have trouble finding a date? Because they're too busy making dates.",
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
    "Why did the JavaScript developer go broke? Because he lost his keys(null).",
    "Why do programmers prefer iOS development over Android development? Because it's more 'app'ealing.",
    "Why did the computer keep freezing? Because it left its Windows open.",
    "Why did the SQL query go to therapy? It had too many relationship issues.",
    "Why did the developer stay in bed all day? They had a bit of a code fever.",
    "Why did the programmer quit his job? He didn't get arrays.",
    "Why don't programmers like to go outside? The sun causes too many reflections.",
    "Why do programmers prefer iOS development over Android development? Because on iOS, you don't have to deal with Java.",
    "Why don't programmers like nature? It has too many bugs.",
    "How do you comfort a JavaScript bug? You console it.",
    "Why do Java developers wear glasses? Because they don't see sharp.",
    "Why was the JavaScript developer sad? Because they didn't 'null' their feelings.",
    "Why do programmers have trouble finding a date? Because they're too busy making dates.",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "Why did the developer go broke? Because he used up all his cache.",
    "What's a programmer's favorite place in New York? The Big Apple.",
    "Why don't programmers like to go outside? The sun causes too many reflections.",
    "What's a web developer's favorite tea? URL Grey.",
    "Why did the developer stay in bed all day? They had a bit of a code fever.",
    "Why did the programmer quit his job? He didn't get arrays.",
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
    "Why was the math book sad? It had too many problems.",
    "Why did the SQL query go to therapy? It had too many relationship issues.",
    "Why did the JavaScript developer go broke? Because he lost his keys(null).",
    "Why do programmers prefer iOS development over Android development? Because it's more 'app'ealing.",
    "Why did the computer keep freezing? Because it left its Windows open.",
    "Why did the developer go broke? Because he used up all his cache."
  ];

let Generate=document.getElementById("Generate");
let copy=document.getElementById("copy")
let check=document.getElementById("check");

Generate.onclick=function(){

    let index = Math.floor(Math.random() * (JokeText.length - 1));
    console.log(index)
    ProgramJoke.style.color="blue";
    ProgramJoke.innerHTML= JokeText[index]


copy.onclick=function(){

  let text = JokeText[index]
  navigator.clipboard.writeText(text);
  check.className = "fa-solid fa-check"

  setTimeout(function(){
  check.className = "fa-solid fa-copy"
  },1000)
}
    
}


