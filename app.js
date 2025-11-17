 let countryField = document.querySelector(".country")
 let tempField = document.querySelector(".temperature");
 let condField = document.querySelector(".condition");
 let timeField = document.querySelector(".time");
 let localField = document.querySelector(".location");
 let searchField = document.querySelector(".search")
//  let buttonField = document.querySelector(".btn")
const form = document.querySelector("form") 


form.addEventListener("submit", searchFunction)
 

let target = "World"
const fetchResult = async(targetLocation)=>{
    let url = `http://api.weatherapi.com/v1/current.json?key=8f5afa0b0456420ab41142818251311&q=${targetLocation}&aqi=no`

    const res = await fetch(url)

    const data = await  res.json()

    console.log(data)
    let countryName = data.location.country
    let locationName = data.location.name
    let localTime = data.location.localtime
    let Temp = data.current.temp_c
    let condition = data.current.condition.text 

    updateDetails(countryName,locationName,localTime,Temp,condition)

}

 function updateDetails(countryName,locationName,localTime,Temp,condition){
       countryField.innerText =countryName
       localField.innerText =locationName
       timeField.innerText= localTime
       tempField.innerText= Temp
       condField.innerText = condition


 }


function searchFunction(e){
    e.preventDefault()
    target = searchField.value
    fetchResult(target)
}

fetchResult(target);