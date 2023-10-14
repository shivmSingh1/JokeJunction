let RandomJoke=document.getElementById("RandomJoke");
RandomJoke.style.color="red";
let JokeText=[
    "Why don't scientists trust atoms? Because they make up everything.",
    "What do you call a bear with no teeth? A gummy bear.",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I'm reading a book on anti-gravity. It's impossible to put down.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "What do you call a fish with no eyes? Fsh.",
    "I used to play piano by ear, but now I use my hands.",
  "I couldn't figure out how to put my seatbelt on. Then it 'clicked'!",
    "How does a penguin build its house? Igloos it together.",
    "I'm on a seafood diet. I see food, and I eat it.",
    "Why was the math book sad? It had too many problems.",
    "How do you organize a space party? You 'planet'!",
    "Why was the computer cold? It left its Windows open.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "I used to play piano by ear, but now I use my hands.",
    "Why do bees have sticky hair? Because they use honeycombs.",
    "I told my computer I needed a break, and now it won't stop giving me Kit Kat bars.",
  "I used to be a baker, but I couldn't make enough dough.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "I'm reading a book on anti-gravity. It's impossible to put down.",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "Why don't scientists trust atoms? Because they make up everything.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "I'm friends with all electricians because we have great current connections.",
    "What do you call a fake noodle? An impasta.",
    "I'm so good at sleeping that I can do it with my eyes closed.",
    "I'm writing a book on reverse psychology. Do not read it!",
  "I don't trust stairs because they're always up to something.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "I asked the librarian if the library had books on paranoia. She whispered, 'They're right behind you.'",
    "I'm friends with all electricians because we have great current connections.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "How do you organize a space party? You 'planet'!",
    "Why did the computer cold? It left its Windows open.",
    "I told my computer I needed a break, and now it won't stop giving me Kit Kat bars.",
    "I'm so good at sleeping that I can do it with my eyes closed.",
    "I'm writing a book on reverse psychology. Do not read it!"
  

  ];

let Generate=document.getElementById("Generate");
let copy=document.getElementById("copy")
let check=document.getElementById("check");

Generate.onclick=function(){
    let index = Math.floor(Math.random() * (JokeText.length - 1));
    RandomJoke.style.color="blue";
    RandomJoke.innerHTML= JokeText[index]

    copy.onclick=function(){

      let text = JokeText[index]
      navigator.clipboard.writeText(text);
      check.className = "fa-solid fa-check"
    
      setTimeout(function(){
      check.className = "fa-solid fa-copy"
      },1000)
    }
}