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

console.log(objArr)