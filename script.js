

let city = document.querySelector('#city')
let btn = document.querySelector('#btn')
let dayhour = document.querySelector('.dayhour')
let comment = document.querySelector('.comment')
let humidity = document.querySelector('.humidity')
let temp = document.querySelector('.temp')
let wind = document.querySelector('.wind')


let api = 'https://weatherdbi.herokuapp.com/data/weather/'


function getWeather (){
    let url = api.concat(city.value)
    fetch(url)
        .then((data) => data.json())
        .then((item) => {
        dayhour.value = item.currentConditions.dayhour
        comment.value = item.currentConditions.comment
        humidity.value = item.currentConditions.humidity
        temp.value = item.currentConditions.temp.c
        wind.value = item.currentConditions.wind.km
    })
}

btn.addEventListener('click', getWeather)



