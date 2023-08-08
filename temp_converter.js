let cel_inp = document.querySelector('#celcius > input')
let far_inp = document.querySelector('#fahrenheit > input')
let kel_inp = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')

function round_num(num){
    return Math.round(num*100)/100
}

// input temp is celcius and calculation of fahrenheit and kelvin.
cel_inp.addEventListener('input', function () {
    let cel_temp = parseFloat(cel_inp.value)
    let far_temp = (cel_temp * (9 / 5)) + 32
    let kel_temp = cel_temp + 273.15
    far_inp.value = round_num(far_temp)
    kel_inp.value = round_num(kel_temp)
})

// input temp is fahrenheit  and calculation of celcius and kelvin.
far_inp.addEventListener('input', function () {
    let far_temp = parseFloat(far_inp.value)
    let cel_temp = (far_temp-32)*(5/9)
    let kel_temp = (far_temp-32)*(5/9) + 273.15
    cel_inp.value = round_num(cel_temp)
    kel_inp.value = round_num(kel_temp)
})

// input temp is kelvin and calculation of fahrenheit and celcius.
kel_inp.addEventListener('input', function () {
    let kel_temp = parseFloat(kel_inp.value)
    let cel_temp = kel_temp - 273.15
    let far_temp = (kel_temp-273.15)*(9/5) + 32
    cel_inp.value = round_num(cel_temp)
    far_inp.value = round_num(far_temp)
})

btn.addEventListener('click',()=>{
    cel_inp.value = ""
    far_inp.value = ""
    kel_inp.value = ""
})