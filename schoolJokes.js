let SchoolJoke=document.getElementById("SchoolJoke");
SchoolJoke.style.color="red";
let JokeText = [
    "I used to be a student, but I got tired of the old grade.",
    "Why did the student bring a ladder to school? Because he thought it was high school.",
    "I told my computer I needed a break, and now it won't stop sending me to the school's website.",
    "My math book started crying, so I tried to comfort it. Now it's got too many problems.",
    "Why did the student bring a pencil to bed? Because he wanted to draw the curtains!",
    "Why don't students trust stairs? Because they're always up to something.",
    "My teacher scolded me for not doing my homework, but I don't think she understands how many episodes are in a season.",
    "I'm not saying my classmates are superheroes, but I've never seen them and Batman in the same room.",
    "Why did the student take a ladder to school? Because he thought it was high school!",
    "Why was the math book sad? Because it had too many problems.",
    "What did one wall say to the other wall? 'I'll meet you at the corner!'",
    "What's a teacher's favorite nation? Expla-nation.",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call a can opener that doesn't work? A can't opener.",
    "Why did the teacher go to the beach? Because she wanted to test the waters.",
    "I'm not a student anymore, but I still take notes. It's just that now, they're on dollar bills.",
    "Why don't scientists trust atoms? Because they make up everything.",
    "Why did the student bring a ladder to school? Because he thought it was high school.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my computer I needed a break, and now it won't stop sending me to the school's website.",
    "My math book started crying, so I tried to comfort it. Now it's got too many problems.",
    "I'm not saying my classmates are superheroes, but I've never seen them and Batman in the same room.",
    "Why did the student take a ladder to school? Because he thought it was high school!",
    "I'm not a student anymore, but I still take notes. It's just that now, they're on dollar bills.",
    "Why don't scientists trust atoms? Because they make up everything.",
    "Why did the student bring a ladder to school? Because he thought it was high school.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my computer I needed a break, and now it won't stop sending me to the school's website.",
    "My math book started crying, so I tried to comfort it. Now it's got too many problems.",
    "I'm not saying my classmates are superheroes, but I've never seen them and Batman in the same room.",
    "Why did the student take a ladder to school? Because he thought it was high school!",
    "I'm not a student anymore, but I still take notes. It's just that now, they're on dollar bills.",
    "Why don't scientists trust atoms? Because they make up everything.",
    "Why did the student bring a ladder to school? Because he thought it was high school!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my computer I needed a break, and now it won't stop sending me to the school's website.",
    "My math book started crying, so I tried to comfort it. Now it's got too many problems.",
    "I'm not saying my classmates are superheroes, but I've never seen them and Batman in the same room.",
    "Why did the student take a ladder to school? Because he thought it was high school!",
    "I'm not a student anymore, but I still take notes. It's just that now, they're on dollar bills.",
    "Why don't scientists trust atoms? Because they make up everything.",
    "Why did the student bring a ladder to school? Because he thought it was high school!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my computer I needed a break, and now it won't stop sending me to the school's website.",
    "My math book started crying, so I tried to comfort it. Now it's got too many problems.",
    "I'm not saying my classmates are superheroes, but I've never seen them and Batman in the same room.",
    "Why did the student take a ladder to school? Because he thought it was high school!",
    "I'm not a student anymore, but I still take notes. It's just that now, they're on dollar bills.",
  ];
  
let Generate=document.getElementById("Generate");
let copy=document.getElementById("copy")
let check=document.getElementById("check");

Generate.onclick=function(){
    let index = Math.floor(Math.random() * (JokeText.length - 1));
    SchoolJoke.style.color="blue";
    SchoolJoke.innerHTML= JokeText[index]

    copy.onclick=function(){

      let text = JokeText[index]
      navigator.clipboard.writeText(text);
      check.className = "fa-solid fa-check"
    
      setTimeout(function(){
      check.className = "fa-solid fa-copy"
      },1000)
    }
}