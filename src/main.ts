import './style.scss'

const greeting = document.querySelector<HTMLParagraphElement>(".page-top__message__text");
const quoteText = document.querySelector<HTMLParagraphElement>("#factText");
const quoteBtn = document.querySelector<HTMLButtonElement>("#factBtn");
const userInput = document.querySelector<HTMLInputElement>("#taskInput");
const submitBtn = document.querySelector<HTMLButtonElement>("#submitBtn");

if(!greeting || !quoteText || !quoteBtn ||!userInput || !submitBtn){
    throw new Error ("Some elements are missing");
}



// Function that checks time of day on page load

const date = new Date
const minutes = date.getMinutes()
const hour = date.getHours()



const timeOfDay = () =>{
    if(hour < 12){
        greeting.innerText=`Good morning! The time is ${hour}:${minutes}! Let's prepare for the day ahead.`;
    } else if(hour < 18){
        greeting.innerText=`Good afternoon! The time is ${hour}:${minutes}! Keep up the great work today!`;
    } else {
        greeting.innerText=`Good evening! The time is ${hour}:${minutes}! Time to unwind and relax.`;
    }
}

timeOfDay()


// using an api to fetch a random quote. 

// fetch("https://api.breakingbadquotes.xyz/v1/quotes")
// .then(response => {
//     if(!response.ok){
//         throw new Error("Could not fetch API");
//     }
//     return response.json();
// })
// .then(data => randomQuote = (data[0].quote))
// .catch(error => console.error(error));



async function fetchApi(){
    try{
        const response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
     if(!response.ok){
        throw new Error("Could not fetch API");
    }
    const data = await response.json();
    const randomQuote = data[0].quote;
    const randomQuoteAuthor = data[0].author;

    quoteText.innerHTML = `<i>${randomQuote}</i> <br><br><strong>${randomQuoteAuthor} - Breaking Bad</strong>`

    }
    catch(error){
        console.error(error);
    }
}

// quoteText.innerText = `${data[0].quote} - ${data[0].author}`

fetchApi()




// event listener
quoteBtn.addEventListener("click", fetchApi);