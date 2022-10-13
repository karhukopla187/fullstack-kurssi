
//koulu, luokat, oppilaat, funktioita <html>>/html>

let oppilas1 = {nimi:"Harry Potter"}
let oppilas2 = {nimi:"Hagrid"}
let oppilas3 = {nimi:"Pasi"}


let luokka1 = {nimi:"3A",
            oppilaidenMäärä:2,
            oppilaat:[oppilas1, oppilas3]
            }

let luokka2 = {nimi:"3B",
            oppilaidenMäärä:1,
            oppilaat:[oppilas2]
            }

let koulu = {oppilaidenMäärä:5,
    nimi: "Harvard",
    luokat: [luokka1,luokka2]
}

const Luokka = (luokka) => {
    return "luokan nimi: "+luokka.nimi
    +luokka.oppilaat.map(oppilas=>
        "<div>"+Oppilas(oppilas)+"</div>")
}

const Oppilas = (oppilas) => {
    return "oppilaan nimi: "+oppilas.nimi+"<button>asd</button>"
}

const Koulu = (koulu) => {
    return "<div><h1>"+koulu.nimi+"</h1>"
    +koulu.luokat.map(luokka=>Luokka(luokka)).join("")+"</div>"
}



console.log(Koulu(koulu))
