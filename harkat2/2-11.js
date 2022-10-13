/*Tehtävä 2.11
Sinulla on [{“ma”:44}, {“pe”:100}, {“ke”:21}, {“ti”: 66},{”la”:22}]. Luo taulukko, jossa on
mukana objektit, joissa on parillinen arvo.*/
/*
list = [{"ma":44}, {"pe":100}, {"ke":21}, {"ti": 66},{"la":22}]

const evens = (list) => {
    return list.reduce((acc, item)=>{
        if (Object.values(item)[0] % 2 === 0) {
            //return acc.concat([item])
            return [...acc,item]
        } else { return acc }
    },[])
}
*/

list = [{"ma":44}, {"pe":100}, {"ke":21}, {"ti": 66},{"la":22}]

const evens = (list) => list.filter(item=> Object.values(item)[0] % 2 === 0)

console.log(evens(list))