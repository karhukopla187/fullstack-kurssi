/*Tehtävä 2.12
Sinulla on [{“ma”:44}, {“pe”:100}, {“ke”:21}, {“ti”: 66},{”la”:22}]. Luo taulukko, jossa on
mukana objektit, joiden avaimen toinen kirjain on e.*/

const daysC = [{"ma":44},{"pe":100},{"ke":21},{"ti":66},{"la":22}]

let regExp = /e/;
const daysWithE = []

for(i=0;i<daysC.length;i++) {
    let match = regExp.test(Object.keys(daysC[i]).toString().charAt(1))
    console.log(match)

    if(match) { daysWithE.push(daysC[i]) }
}

console.log("2.12 päivät joiden toinen kirjain E: ")
console.log(daysWithE)