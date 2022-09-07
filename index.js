const button = document.getElementById("button-el")
const length = document.getElementById("length-field")
const mass = document.getElementById("mass-field")
const volume = document.getElementById("volume-field")
let input = document.getElementById("input-el")

button.addEventListener("click", function() {

    feet = input.value * 3.281
    gallon = input.value * 0.264
    pounds = input.value * 2.204
    meters = input.value / 3.281
    litres = input.value / 0.264
    kg = input.value / 2.204
    
    length.innerHTML = `${input.value} meters = ${feet.toFixed(3)} feet | ${input.value} feet = ${meters.toFixed(3)} meters`
    volume.innerHTML = `${input.value} liters = ${gallon.toFixed(3)} gallon | ${input.value} gallons = ${litres.toFixed(3)} litres`
    mass.innerHTML = `${input.value} kg = ${pounds.toFixed(3)} pounds | ${input.value} pounds = ${kg.toFixed(3)} kg`
        
})

