let DarkJoke=document.getElementById("DarkJoke");
DarkJoke.style.color="red";
let JokeText=[
    {
        "category": "Dark",
        "type": "single",
        "joke": "I was going to tell a dead baby joke. But I decided to abort.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "id": 207,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "Dark humor is like food, not everyone gets it.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": true,
            "sexist": false,
            "explicit": true
        },
        "id": 162,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "I didn't vaccinate my 10 kids and the one that survived is fine!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 96,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "My grandfather says I'm too reliant on technology.\nI called him a hypocrite and unplugged his life support.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 178,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "I have a fish that can breakdance! Only for 20 seconds though, and only once.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 237,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "I hate double standards. Burn a body at a crematorium, you're \"being a respectful friend.\" Do it at home and you're \"destroying evidence.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "safe": false,
        "id": 274,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "Hey girl are you a school? Because I want to shoot some kids up inside of you.",
        "flags": {
            "nsfw": true,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "safe": false,
        "id": 269,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "I'll never forget my Granddad's last words to me just before he died. \"Are you still holding the ladder?\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 208,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "I don't know where I stand on abortion. I like killing babies, but I don't like giving women a choice.",
        "flags": {
            "nsfw": true,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": true,
            "explicit": true
        },
        "id": 228,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "Nowadays people are so sensitive, you can't even say \"black paint\" anymore.\nInstead, you have to say \"Jamal, please paint the fence\".",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": true,
            "sexist": false,
            "explicit": false
        },
        "id": 133,
        "safe": false,
        "lang": "en"
    }
]

let Generate=document.getElementById("Generate");
let copy=document.getElementById("copy")
let check=document.getElementById("check");

Generate.onclick=function(){
    let index = Math.floor(Math.random() * (JokeText.length - 1));
    DarkJoke.style.color="blue";
    DarkJoke.innerHTML= JokeText[index].joke

    copy.onclick=function(){

        let text = JokeText[index]
        navigator.clipboard.writeText(text);
        check.className = "fa-solid fa-check"
      
        setTimeout(function(){
        check.className = "fa-solid fa-copy"
        },1000)
      }
}