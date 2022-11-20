/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const lengthResult = document.getElementById("length-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")

inputBtn.addEventListener("click", function() {
    let inputNumber = inputEl.value
    lengthResult.innerText = 
        `${inputNumber} meters = ${(inputNumber*3.281).toFixed(3)} feet | ${inputNumber} feet = ${(inputNumber/3.281).toFixed(3)} meters`
    volumeResult.innerText = 
        `${inputNumber} liters = ${(inputNumber*0.264).toFixed(3)} gallons | ${inputNumber} gallons = ${(inputNumber/0.264).toFixed(3)} liters`
    massResult.innerText = 
        `${inputNumber} kilograms = ${(inputNumber*2.204).toFixed(3)} pounds | ${inputNumber} pounds = ${(inputNumber/2.204).toFixed(3)} kilograms`
})
