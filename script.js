/******************Hamburger ********************/

const hamburger = document.querySelector("#hamburger");
const header = document.querySelector("header");

hamburger.addEventListener("click", toggleNav);

function toggleNav() {
    header.classList.toggle("navOpen");
}

/********************Hamburger ********************/

/********************Hero *************************/
const heroContainer = document.querySelector("#home");


function setHero(){
    heroContainer.style.minHeight = `${window.innerHeight - parseInt(getComputedStyle(header).height)}px`;
}

setHero();

/********************Hero *************************/

/******************Countdown *************************/

const countdown = document.querySelector("#timer");

const countDownDate = new Date("March 09, 2022 10:00:00").getTime();

function timer(){
    let now = new Date().getTime();
    let secondsLeft = parseInt((countDownDate - now) / 1000);
    
    let days = Math.floor(secondsLeft / 24 / 60 / 60);
    let hoursLeft = Math.floor(secondsLeft - days * 86400);
    let hours = Math.floor(hoursLeft / 3600);
    let minutesLeft = Math.floor(hoursLeft - hours * 3600);
    let minutes = Math.floor(minutesLeft / 60);
    let seconds = secondsLeft % 60;
    
    days = days > 9 ? days : `0${days}`;
    hours = hours > 9 ? hours : `0${hours}`;
    minutes = minutes > 9 ? minutes : `0${minutes}`; 
    seconds = seconds > 9 ? seconds : `0${seconds}`; 
    
    countdown.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}

let timerProcess = setInterval(timer, 1000);

/******************Coutndown *************************/

/******************Form *************************/

const form = document.querySelector("form");
form.addEventListener("submit", function(event){submitForm(event)});

function submitForm(e){
    if(form.mobile.value.length !== 10){
        alert("Mobile number should be 10 digits");
        e.preventDefault();
    }else{
         let dobValue = form.dob.value.split("-")
        if(parseInt(dobValue[0]) >= 2002){
             alert("Sorry. You are not eligible for this competition");
            e.preventDefault();
         }else{
            alert("Form submitted");
            e.submit();
        }
    }
}

/******************Form *************************/