var days = [
    {"ma":44},
    {"pe":100},
    {"ke":21},
    {"ti":66},
    {"la":22}
]
/*
for(i=0;i<Object.keys(days).length;i++) {
    let str = days[Object.keys(days)[i]];
    console.log(str)
}
*/
let regExp = /e/;
var daysE = []
var keyArr = Object.keys(days)
console.log(keyArr)

days.forEach(day => {
    let str = Object.keys(days)
    console.log(str)
    let match = regExp.test(str.charAt(1))
    if(match) { daysE.push(day) } else {return}
});

/*
for(i=0;i<Object.keys(days).length;i++) {
    str = days[Object.keys(days)[i]];
    console.log(str)
    //let match = regExp.test(testStr.charAt(1))
    //if(match) { daysE.push(str) } else {return}
};
console.log(str)

console.log("2.12 päivät joiden toinen kirjain E: ")
console.log(daysE)
*/