let zutaten = [];
let gesamtPreis = 0;
let anzahl = 0;
let url = new URL(window.location.href);
let badge;
let card;


// Der Call zur Api
function selectZutat(){
    fetch('http://localhost:8080/api/v1/ZUTAT?limit=10000')
        .then(response => response.json())
        .then(result =>{
            zutaten = result;
        })
        .catch((error) => console.log('error', error))
        .finally(() => {
            buildZutaten()
        });
    return zutaten
}

//HTML zusammenbauen
function buildZutaten () {
    let continueButton = document.createElement("button");
    let textButton = document.createTextNode("Weiter");
    continueButton.appendChild(textButton);
    continueButton.classList.add("btn");
    continueButton.classList.add("btn-success");
    continueButton.classList.add("bestell-button");
    let buttonElement = document.getElementById("js-button");
    buttonElement.appendChild(continueButton);
    continueButton.onclick = function() {location.replace(url)};

    zutaten.forEach(zutat => {
        anzahl = 0;
        card = document.createElement("div");
        card.setAttribute('id',zutat.ZUTATENNR)
        url.pathname = "/html/zutatenbestellung";
        card.onclick = function() {
            url.searchParams.append("zutat", zutat.ZUTATENNR)
        }
        badge = document.createElement("h3");
        badge.setAttribute("id", "count-badge");
        badge.classList.add("count-badge")
        badge.innerHTML = anzahl;
        let cardBody = document.createElement("div");
        let textP = document.createElement("h2");
        let textP1 = document.createElement("p");
        let textP2 = document.createElement("p");
        let textP3 = document.createElement("p");
        let textP4 = document.createElement("p");
        let textP5 = document.createElement("p");
        const text = document.createTextNode(zutat.BEZEICHNUNG);
        const other = document.createTextNode(zutat.EINHEIT + ": " + zutat.NETTOPREIS.toFixed(2) + ' Euro');
        const other1 = document.createTextNode("Kalorien: " + zutat.KALORIEN + " kcal");
        const other2 = document.createTextNode("Kohlenhydrate: " + zutat.KOHLENHYDRATE + " g");
        const other3 = document.createTextNode("Proteine: " + zutat.PROTEIN + " g");
        gesamtPreis += parseFloat(zutat.NETTOPREIS);
        card.classList.add("card")
        card.classList.add("zutaten")
        cardBody.classList.add("card-body");
        textP.appendChild(text);
        textP1.appendChild(other);
        textP2.appendChild(other1);
        textP3.appendChild(other2);
        textP4.appendChild(other3);
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
}

if(anzahl>0){
    card.appendChild(badge);
}
selectZutat();
