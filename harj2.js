
/*Tehtävä 2.1
Tee ohjelma, joka tallentaa yhden viikon viikonpäivät ja niitä vastaavat työtunnit
taulukkoon. Voit keksiä päiville haluamasi työtunnit, rehellinen pitää kuitenkin olla.*/

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

week.forEach((day => {
    hSum += day.hours
    {day.hours<min ? min = day.hours : min = min}
    {day.hours>max ? max = day.hours: max = max}

}))

var avg = hSum / week.length
console.log("2.2 keskiarvo "+avg+" tuntia per päivä")

/*Tehtävä 2.3
Lisää ohjelmaan 2.2 minimin ja maksimin selvittävä osuus.
a) for-rakenteen (forEach, for-silmukka tai for of) avulla
b) reduce -funktiolla*/

//a
console.log("2.3 lyhin päivä "+min+"h / pisin päivä "+max+"h")

//b
/*
min = week.reduce((prev, curr)=> {
    {prev.hours<curr.hours ? min = prev.hours : min = curr.hours}
})

console.log("reducella lyhin päivä "+min+"h / pisin päivä "+max+"h")
*/

/*Tehtävä 2.4
Tee ohjelma, jonka lähtökohtana ovat 12 kuukauden palkkatulot kuukausittain.
Kuukausipalkkaa korotetaan 50 %:lla. Ohjelma luo uuden taulukon, josta löytyvät korotetut
palkat.*/

var incomes = [
    {name:"jan", income:4000},
    {name:"feb", income:4100},
    {name:"mar", income:4200},
    {name:"apr", income:4300},
    {name:"may", income:4400},
    {name:"jun", income:4500},
    {name:"jul", income:4600},
    {name:"aug", income:4700},
    {name:"sep", income:4800},
    {name:"oct", income:4900},
    {name:"nov", income:5000},
    {name:"dec", income:5100},
]

var newInc = []

function raiseCalc(incomes) {

    incomes.forEach((month => {
        var raise = month.income * 1.5
        var newMonth = {name: month.name, income: raise}
        newInc.push(newMonth)
    }
    ))
}

raiseCalc(incomes)

console.log("2.4 korotetut palkat:")
console.log(newInc)

/*Tehtävä 2.5
Tee ohjelma, jonka lähtökohtana ovat 12 kuukauden bruttopalkat kuukausittain ja
veroprosentti. Ohjelma luo uuden taulukon ja laskee nettotulot vähentäen jokaisen
kuukauden bruttopalkasta verot.*/

var incomes2 = [
    {name:"jan", income:4000, tax:10},
    {name:"feb", income:4100, tax:10},
    {name:"mar", income:4200, tax:10},
    {name:"apr", income:4300, tax:10},
    {name:"may", income:4400, tax:10},
    {name:"jun", income:4500, tax:10},
    {name:"jul", income:4600, tax:10},
    {name:"aug", income:4700, tax:10},
    {name:"sep", income:4800, tax:10},
    {name:"oct", income:4900, tax:10},
    {name:"nov", income:5000, tax:10},
    {name:"dec", income:5100, tax:10},
]

var netMonths = []

function taxCalc(incomes2){

    incomes2.forEach((month => {
        var net = month.income - (month.income/month.tax)
        var netMonth = {name:month.name, income:net}
        netMonths.push(netMonth)
    }))
}

taxCalc(incomes2)

console.log("2.5 nettotulot")
console.log(netMonths)

/*Tehtävä 2.6
Tee ohjelma, joka järjestää taulukon luvut [1,4,100,2,5,4] suuruusjärjestykseen. Käytä
JavaScriptin sort-funktiota oletustoteutuksella (ei omaa compare-funktiota)*/

const nums = [1,4,100,2,5,4]

nums.sort((a,b) => a-b)

console.log("2.6 taulukko suuruusjärjestyksessä: ")
console.log(nums)

/*Tehtävä 2.7
Tee ohjelma, joka järjestää taulukon merkkijonot [“1”,”4”,”100”,”2”,”5”,”4”]
aakkosjärjestykseen. Käytä JavaScriptin sort-funktiota oletustoteutuksella (ei omaa
compare-funktiota)*/

const numStrings = ["1","4","100","2","5","4"]

numStrings.sort()

console.log("2.7 merkkijono aakkosjärjestyksessä")
console.log(numStrings)

/*Tehtävä 2.8
Selitä lyhyesti miten miten JavaScriptin sort-funktio toimii ja mitä tarkoittaa parametrina
annettava compare-funktio.*/

//Sort järjestää elementit aakkosjärjestykseen, compare-funktiolla voidaan määritellä
//järjestys tarkemmin, esim. numerot suuruusjärjestykseen

/*Tehtävä 2.9
Sinulla on [{“ma”:44}, {“pe”:100}, {“ke”:21}, {“ti”: 66},{”la”:22}]. Luo taulukko, jossa taulukon
objektit on järjestetty arvojen(values) mukaiseen järjestykseen.*/

var days = [
    {key:"ma",value:44},
    {key:"pe",value:100},
    {key:"ke",value:21},
    {key:"ti",value:66},
    {key:"la",value:22}
]

days.sort((a,b) => {
    return a.value - b.value
})

console.log("2.9 päivät arvojen mukaan")
console.log(days)

/*Tehtävä 2.10
Sinulla on [{“ma”:44}, {“pe”:100}, {“ke”:21}, {“ti”: 66},{”la”:22}]. Luo taulukko, jossa taulukon
kentät on järjestetty päivien(avaimet) mukaiseen järjestykseen periaatteella
ma&lt;ti&lt;ke&lt;to&lt;pe&lt;la&lt;su.*/

var sortedDays = []
let keyValue = 0

//antaa kullekin päivälle tietyn arvon
//voi ottaa vastaan tuntemattoman pituisen listan
days.forEach((day => {

    //tarkastaa mahdollisten duplikaattipäivien varalta ja antaa toiselle suuremman arvon
    if(sortedDays[keyValue.key] = day.key) {sortedDays.value++}
    
    switch (day.key) {
        case "ma":
            sortedDays.push( {key:"ma",value:keyValue} )
            break
        case "ti":
            sortedDays.push( {key:"ti",value:keyValue+1} )
            break
        case "ke":
            sortedDays.push( {key:"ke",value:keyValue+2} )
            break
        case "to":
            sortedDays.push( {key:"to",value:keyValue+3} )
            break
        case "pe":
            sortedDays.push( {key:"pe",value:keyValue+4} )
            break
        case "la":
            sortedDays.push( {key:"la",value:keyValue+5} )
            break
        case "su":
            sortedDays.push( {key:"su",value:keyValue+6} )
            break
    }
}))

//järjestää päivät arvojen mukaan
sortedDays.sort((a,b) => {
    return a.value - b.value
})

//lopullinen lista pelkillä päivien nimillä
var daysByKey = [] 

sortedDays.forEach((day) => {
    daysByKey.push(day.key)
})

console.log("2.10: päivät järjestyksessä: ")
console.log(daysByKey)

/*Tehtävä 2.11
Sinulla on [{“ma”:44}, {“pe”:100}, {“ke”:21}, {“ti”: 66},{”la”:22}]. Luo taulukko, jossa on
mukana objektit, joissa on parillinen arvo.*/

var days = [
    {key:"ma",value:44},
    {key:"pe",value:100},
    {key:"ke",value:21},
    {key:"ti",value:66},
    {key:"la",value:22}
]

var evens = []

days.forEach((day) => {
    let value = day.value
    if (value % 2 == 0) { evens.push(day) } else {return}
})

console.log("2.11 parilliset")
console.log(evens)

/*Tehtävä 2.12
Sinulla on [{“ma”:44}, {“pe”:100}, {“ke”:21}, {“ti”: 66},{”la”:22}]. Luo taulukko, jossa on
mukana objektit, joiden avaimen toinen kirjain on e.*/

const daysC = [
    {"ma":44},
    {"pe":100},
    {"ke":21},
    {"ti":66},
    {"la":22}
]

let regExp = /e/;
const daysWithE = []

for(i=0;i<daysC.length;i++) {
    let match = regExp.test(Object.keys(daysC[i]).toString().charAt(1))
    if(match) { daysWithE.push(daysC[i]) }
}

console.log("2.12 päivät joiden toinen kirjain E: ")
console.log(daysWithE)

/*Tehtävä 2.13
Sinulla on {“ma”:44, “pe”:100, “ke”:21, “ti”: 66,”la”:22}. Tee ohjelma, joka muuttaa objektin
listaksi niin, että [{“ma”:44},{“pe”:100},...]. Ohje: käytä esim. Objectin keys ja values -
funktioita.*/

const obj = {"ma":44, "pe":100, "ke":21, "ti":66,"la":22}

const objArr = []
var objKeys = Object.keys(obj)
var objValues = Object.values(obj)
    
for(i=0;i<Object.keys(obj).length;i++) {
    objArr.push({key:objKeys[i],value:objValues[i]})
}

console.log("2.13")
console.log(objArr)