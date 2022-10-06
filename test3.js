const week = []

const mon = {name:"mon", hours:8}
const tue = {name:"tue", hours:7}
const wed = {name:"wed", hours:6}
const thu = {name:"thu", hours:16}
const fri = {name:"fri", hours:27}
const sat = {name:"sat", hours:0}
const sun = {name:"sun", hours:64}

week.push(mon,tue,wed,thu,fri,sat,sun)

console.log("2.1")
console.log(week)

/*Tehtävä 2.2
Tee tehtävän 2.1 ohjelmaan lisäominaisuus, joka laskee työtuntien keskiarvon
a) for-rakenteen (forEach, for-silmukka tai for of) avulla
b) reduce -funktiolla*/

let hSum = 0
let min = 0
let max = 0

min = week.reduce((prev, curr)=> {
    {prev.hours<curr.hours ? min = prev.hours : min = curr.hours}
})

console.log("reducella lyhin päivä "+min+"h / pisin päivä "+max+"h")

/*
week.forEach((day => {
    hSum += day.hours
    {day.hours<min ? min = day.hours : min = min}
    {day.hours>max ? max = day.hours: max = max}

}))

var avg = hSum / week.length
console.log("2.2 keskiarvo "+avg+" tuntia per päivä")
*/
/*Tehtävä 2.3
Lisää ohjelmaan 2.2 minimin ja maksimin selvittävä osuus.
a) for-rakenteen (forEach, for-silmukka tai for of) avulla
b) reduce -funktiolla*/

//a
//console.log("2.3 lyhin päivä "+min+"h / pisin päivä "+max+"h")

//b
min = week.reduce((prev, curr)=> {
    {prev.hours<curr.hours ? min = prev.hours : min = curr.hours}
})

console.log("reducella lyhin päivä "+min+"h / pisin päivä "+max+"h")