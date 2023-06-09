let app__random_form_input = document.querySelectorAll(".app__random-form-input")
let app__random_form_btn = document.querySelector(".app__random-form-btn")
let app__random_numberbox_number = document.querySelector(".app__random-numberbox-number")
let app__random_numberbox_wraper = document.querySelector(".app__random-numberbox-wraper")
let app__random_numberbox_wraper_after = document.querySelector(".app__random-numberbox-wraper-close")
let history_ = document.querySelector(".history")

const getRandomNUmber = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min)
}

const historyElement = (number) => {
    let div = document.createElement("div")
    div.className = "history__element"
    div.textContent = number
    return div
}

app__random_form_btn.addEventListener("click", e => {
    let randomNumber = getRandomNUmber(app__random_form_input[1].value, app__random_form_input[0].value)
    app__random_numberbox_number.textContent = randomNumber
    app__random_numberbox_wraper.style.display = "flex"
    history_.append(historyElement(randomNumber))
})

app__random_numberbox_wraper_after.addEventListener("click", e => {
    app__random_numberbox_wraper.style.display = "none"
})