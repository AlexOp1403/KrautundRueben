let rezeptinhaltZutat = [];
let gesamtPreis = 0;
let anzahl = 1;
let url = new URL(window.location.href);

function buildRezeptInhaltZutat() {
    let rezeptZutaten =  []
    let rezeptId= new URLSearchParams(window.location.search).get("rezept")
    rezeptinhaltZutat.forEach(rezept => {
        if(rezept.REZEPTID == rezeptId) {
            rezeptZutaten.push(rezept);
        }
    })
    rezeptZutaten.forEach( rezept => {
            let card = document.createElement("div");
            card.setAttribute('id',rezept.REZEPTID)
            url.pathname = "/html/bestellen";
            url.searchParams.set("rezept", rezept.REZEPTID)
            let cardBody = document.createElement("div");
            let textP = document.createElement("h2");
            let textP1 = document.createElement("p");
            let textP2 = document.createElement("p");
            let textP3 = document.createElement("p");
            let textP4 = document.createElement("p");
            let textP5 = document.createElement("p");
            const text = document.createTextNode(rezept.ZUTAT.BEZEICHNUNG);
            const other = document.createTextNode(rezept.ZUTAT.EINHEIT + ": " + rezept.ZUTAT.NETTOPREIS.toFixed(2) + ' Euro');
            const other1 = document.createTextNode("Kalorien: " + rezept.ZUTAT.KALORIEN + " kcal");
            const other2 = document.createTextNode("Kohlenhydrate: " + rezept.ZUTAT.KOHLENHYDRATE + " g");
            const other3 = document.createTextNode("Proteine: " + rezept.ZUTAT.PROTEIN + " g");
            const other4 = document.createTextNode("Menge: " + rezept.MENGE + " " +rezept.ZUTAT.EINHEIT);
            gesamtPreis += (parseFloat(rezept.MENGE) * parseFloat(rezept.ZUTAT.NETTOPREIS));
            card.classList.add("card")
            card.classList.add("zutaten")
            cardBody.classList.add("card-body");
            textP.appendChild(text);
            textP1.appendChild(other);
            textP2.appendChild(other1);
            textP3.appendChild(other2);
            textP4.appendChild(other3);
            textP5.appendChild(other4);
            cardBody.appendChild(textP)
            cardBody.appendChild(textP1)
            cardBody.appendChild(textP2)
            cardBody.appendChild(textP3)
            cardBody.appendChild(textP4)
            cardBody.appendChild(textP5)
            card.appendChild(cardBody);

        const element = document.getElementById("js-zutaten");
            element.appendChild(card);
    })


    const other4 = document.createTextNode("Preis pro Rezept: " + gesamtPreis.toFixed(2) + " Euro");
    let preis = document.createElement("h3");
    preis.appendChild(other4);
    let elementPreis = document.getElementById("js-preis");
    elementPreis.appendChild(preis);
    let elementButton = document.getElementById("js-bestellung");
    let button = document.createElement("button");
    button.innerHTML = "Bestellen";
    button.classList.add("btn");
    button.classList.add("btn-success");
    button.classList.add("bestell-button");
    button.onclick = function() {location.replace(url)};
    elementButton.appendChild(button);
}

function selectRezeptDetails(){
    fetch('http://localhost:8080/api/v1/REZEPTINHALT/belongs/ZUTAT?limit=10000')
        .then(response => response.json())
        .then(result =>{
            rezeptinhaltZutat = result;
        })
        .catch((error) => console.log('error', error))
        .finally(() => {
            buildRezeptInhaltZutat()
        });
    return rezeptinhaltZutat
}
document.getElementById("js-inputAnzahl").addEventListener('keyup', function () {
    anzahl = parseFloat(document.getElementById("js-inputAnzahl").value);
    console.log(anzahl)
    url.searchParams.set("anzahl", anzahl)
})
selectRezeptDetails();