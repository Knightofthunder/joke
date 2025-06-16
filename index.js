let click = document.getElementById("hero-mid-jokebox-genrator-button");
click.addEventListener("click", async hero=> {
          hero.preventDefault(); 
     // displayJoke(await jokeApi()); //either i can write this to as a
        const newjoke = await jokeApi();  // const newjoke = await jokeApi();
        displayJoke(newjoke);             // displayJoke(newjoke);
                                          // or like this displayJoke(await jokeApi());
         
});

async function jokeApi() {
    const apiUrl= "https://official-joke-api.appspot.com/jokes/random"; //it was a simple api link
    const fetching= await fetch(apiUrl);                                // here i acting use fetch() function with a argunent of api with await
    const waiting= await fetching.json();                               //  here im waiting to be purse data into json() format
    console.log(waiting.setup);                                         // loging data data.setup
    return waiting;                                                     // returing waiting (data + which store json() data)0
}

function displayJoke(waiting){
    let display = document.getElementById("hero-mid-jokebox-main-para");
    display.innerHTML = `<strong>${waiting.setup} </strong>`;
    const a= document.getElementById("hero-mid-jokebox-genrator-button");
    a.style.color= "red";
    let display2= document.getElementById("hero-mid-jokebox-main-para2");
    display2.innerHTML = `<bold>${waiting.punchline} </bold>`;
}

const subButton = document.getElementById("hero-mid-jokebox-genrator-button-subs-button");
subButton.addEventListener("click", async subs=> {
    subs.preventDefault();
    subButton.style.color="pink";
    const newbutton = document.createElement("a");
    newbutton.setAttribute("href", "email.html");
    document.body.appendChild(newbutton);
    newbutton.click();
    document.removeChild(newbutton);
});