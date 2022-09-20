const formCollector = document.getElementById("form");
let infoMainText = document.querySelector(".info-main-text");
let infoParagraph = document.querySelector(".info-paragraph");
const email = document.getElementById("email");
const imgError = document.querySelector(".img-error");
const submitBtn = document.getElementById("btn");
const invalidText = document.querySelector(".invalid");
// let emailInvalidCharacters = `/^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:`
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function submitBtnClicked(event) {
    console.log("Hello")
    event.preventDefault();
    // document.body.style.backgroundColor = "blue"

    let isValue = email.value.length !== 0 && emailRegExp.test(email.value);
    if(!isValue) {
    email.style.border = "red 2px solid"
    imgError.style.display = "inherit"
    invalidText.style.display = "flex"        
    } else {
        email.style.border = "rgb(213, 176, 176) 2px solid"
        imgError.style.display = "none"
        invalidText.style.display = "none"
        infoMainText.textContent = `Thank You`
        infoParagraph.textContent = `We appreciate you signing up. You will be the first to know about new releases, giveaways & special projects. Stay tuned!`
        formCollector.style.display = "none"
    }


}

submitBtn.addEventListener("click", submitBtnClicked)