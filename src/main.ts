import './style.scss'

const greeting = document.querySelector<HTMLParagraphElement>(".page-top__message__text");
const quoteText = document.querySelector<HTMLParagraphElement>("#factText");
const quoteBtn = document.querySelector<HTMLButtonElement>("#factBtn");
const userInput = document.querySelector<HTMLInputElement>("#taskInput");
const submitBtn = document.querySelector<HTMLButtonElement>("#submitBtn");
const taskList = document.querySelector<HTMLDivElement>(".todo-created__list");

if(!greeting || !quoteText || !quoteBtn ||!userInput || !submitBtn || !taskList){
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

const fetchApi = async () =>{
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

fetchApi()

// Function that will add user input as a new task

const addNewTask = () => {
    const inputtedTask = userInput.value.trim();

    if(inputtedTask === "") return;

    const newTaskDiv = document.createElement("div");
    newTaskDiv.classList.add("todo-created__task");

    const newTaskCheckbox = document.createElement("input");
    newTaskCheckbox.type = "checkbox";
    newTaskCheckbox.classList.add("todo-created__task__checkbox");

    const newTaskText = document.createElement("p");
    newTaskText.classList.add("todo-created__task__text");
    newTaskText.innerText = inputtedTask;

    newTaskDiv.appendChild(newTaskCheckbox);
    newTaskDiv.appendChild(newTaskText);

    taskList.appendChild(newTaskDiv);

    userInput.value = "";
    // userInput.placeholder = "Type new task here...";

};

// event listener
quoteBtn.addEventListener("click", fetchApi);
submitBtn.addEventListener("click", addNewTask);