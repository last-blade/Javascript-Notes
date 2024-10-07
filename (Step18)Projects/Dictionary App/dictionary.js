const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");

const button = document.getElementById("search-btn");

button.addEventListener('click', ()=>{
    let inpWord = document.getElementById("inp-word").value;
    console.log(inpWord);
    fetch(`${url}${inpWord}`)
    .then(response => response.json())
    .then((data)=>{
        console.log(data);


        document.getElementById("myWord").textContent = inpWord;
        const getMeaning = data[0].meanings[0].definitions[0].definition;
        document.querySelector(".word-meaning").textContent = getMeaning;
        const getMeaning2 = data[0].meanings[1].definitions[0].definition;
        document.querySelector(".word-meaning").textContent = getMeaning2;
        const details = data[0].meanings[0].partOfSpeech;
        document.querySelector(".details").textContent = details;

        if(data[0].meanings[0].synonyms[0]){
            const wordSynonym = data[0].meanings[0].synonyms[0];
            document.getElementById("synonym").textContent = wordSynonym;
            document.createElement('span').textContent = ",";
            document.getElementById("synonym").style.display = "block";
        }

        else if(data[0].meanings[0].synonyms[1]){
            const wordSynonym2 = data[0].meanings[0].synonyms[1];
            document.getElementById("synonym2").textContent = wordSynonym2;
            document.getElementById("synonym").style.display = "block";
        }


        if(data[0].phonetics[1].audio){
            var sound = document.getElementById("sound");
            sound.setAttribute("src", data[0].phonetics[1].audio);
        }

        else if(data[0].phonetics[0].audio){
            var sound = document.getElementById("sound");
            sound.setAttribute("src", data[0].phonetics[0].audio);
        }

        else if(data[0].phonetics[2].audio){
            var sound = document.getElementById("sound");
            sound.setAttribute("src", data[0].phonetics[2].audio)
        }

        else if(data[0].phonetics[3].audio){
            var sound = document.getElementById("sound");
            sound.setAttribute("src", data[0].phonetics[2].audio)
        }

        // const wordAntonym = data[0].meanings[0].antonyms[1];
        // document.getElementById("antonym").textContent = wordAntonym;


        if(data[0].meanings[0].definitions[0].example){
            const examples = data[0].meanings[0].definitions[0].example;
            document.querySelector(".word-example").textContent = examples;
            
        }

        else if(data[0].meanings[1].definitions[0].example){
            const examples = data[0].meanings[1].definitions[0].example;
            document.querySelector(".word-example").textContent = examples;
        }

        else if(data[0].meanings[2].definitions[0].example){
            const examples = data[0].meanings[2].definitions[0].example;
            document.querySelector(".word-example").textContent = examples;
        }

        else if(data[0].meanings[3].definitions[0].example){
            const examples = data[0].meanings[3].definitions[0].example;
            document.querySelector(".word-example").textContent = examples;
        }


            // const examples2 = data[0].meanings[i+1].definitions[i+1].example;
            // document.querySelector(".word-example2").textContent = examples2;

        // console.log(sound);
        document.querySelector("#sound-btn").addEventListener('click', ()=>{
            playSound();
        })
    });
});

 function playSound(){
    sound.play();
 }

 button.addEventListener('click', ()=>{
    document.getElementById("sound-btn").style.display = "block";
 })