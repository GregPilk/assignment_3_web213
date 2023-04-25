/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 35;
let dayCounter = 0;
let cost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let mondayButton = document.getElementById("monday");
function Mondays(){
    if (!mondayButton.classList.contains("clicked")){
        dayCounter ++;
        mondayButton.classList.add("clicked");
    } else if (mondayButton.classList.contains("clicked")){
        dayCounter --;
        mondayButton.classList.remove("clicked");
    }
    displayCost();
}
mondayButton.addEventListener("click", Mondays);

let tuesdayButton = document.getElementById("tuesday");
function Tuesdays(){
    if (!tuesdayButton.classList.contains("clicked")){
        dayCounter ++;
        tuesdayButton.classList.add("clicked");
    } else if (tuesdayButton.classList.contains("clicked")){
        dayCounter --;
        tuesdayButton.classList.remove("clicked");
    }
    displayCost();
}
tuesdayButton.addEventListener("click", Tuesdays);

let wednesdayButton = document.getElementById("wednesday");
function Wednesday(){
    if (!wednesdayButton.classList.contains("clicked")){
        dayCounter ++;
        wednesdayButton.classList.add("clicked");
    } else if (wednesdayButton.classList.contains("clicked")){
        dayCounter --;
        wednesdayButton.classList.remove("clicked");
    }
    displayCost();
}
wednesdayButton.addEventListener("click", Wednesday);

let thursdayButton = document.getElementById("thursday");
function Thursdays(){
    if (!thursdayButton.classList.contains("clicked")){
        dayCounter ++;
        thursdayButton.classList.add("clicked");
    } else if (thursdayButton.classList.contains("clicked")){
        dayCounter --;
        thursdayButton.classList.remove("clicked");
    }
    displayCost();
}
thursdayButton.addEventListener("click", Thursdays);

let fridayButton = document.getElementById("friday");
function Fridays(){
    if (!fridayButton.classList.contains("clicked")){
        dayCounter ++;
        fridayButton.classList.add("clicked");
    } else if (fridayButton.classList.contains("clicked")){
        dayCounter --;
        fridayButton.classList.remove("clicked");
    }
    displayCost();
}
fridayButton.addEventListener("click", Fridays);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let thisClears = document.getElementById("clear-button");

function clearDays(){
    cost.textContent = 0;
    dayCounter = 0;
    halfDays.classList.remove("clicked");
    fullDays.classList.add("clicked");
    mondayButton.classList.remove("clicked");
    tuesdayButton.classList.remove("clicked");
    wednesdayButton.classList.remove("clicked");
    thursdayButton.classList.remove("clicked");
    fridayButton.classList.remove("clicked");

}

thisClears.addEventListener("click", clearDays);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

let fullDays = document.getElementById("full");
let halfDays = document.getElementById("half");
let duration = "full";

function halfDay(){
    if (duration == "full") {
        duration = "half";
        fullDays.classList.remove("clicked");
        costPerDay = 20;
        halfDays.classList.add("clicked");
    }
    displayCost();
}

halfDays.addEventListener("click", halfDay);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullDay(){
    if (duration == "half") {
        duration = "full";
        halfDays.classList.remove("clicked");
        costPerDay = 35;
        fullDays.classList.add("clicked");
    }
    displayCost();
}

fullDays.addEventListener("click", fullDay);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function displayCost(){
    let totalNewCost = 0;
    totalNewCost = costPerDay * dayCounter;
    cost.textContent = totalNewCost;
}
