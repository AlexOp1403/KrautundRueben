let rezeptinhalt = [];
let preisTotal = 0;

function buildRezeptInhaltZutat() {
    let rezeptZutaten =  []
    let rezeptEinzelPreis = 0;
    let rezeptId= new URLSearchParams(window.location.search).get("rezept")
    rezeptinhalt.forEach(rezept => {
        if(rezept.REZEPTID == rezeptId) {
            rezeptZutaten.push(rezept);
        }
    })
    rezeptZutaten.forEach( rezept => {
        let cardBody = document.createElement("div");
        cardBody.setAttribute('id',rezept.REZEPTID)
        let textP = document.createElement("h2");
        let textP1 = document.createElement("p");
        let textP2 = document.createElement("h3");
        let textP5 = document.createElement("p");
        const text = document.createTextNode(rezept.ZUTAT.BEZEICHNUNG);
        const other = document.createTextNode(rezept.ZUTAT.EINHEIT + ": " + rezept.ZUTAT.NETTOPREIS + ' Euro');
        const other1 = document.createTextNode("Preis: " + parseFloat(rezept.MENGE) * parseFloat(rezept.ZUTAT.NETTOPREIS) + " Euro");
        const other4 = document.createTextNode("Menge: " + rezept.MENGE);
        preisTotal += (parseFloat(rezept.MENGE) * parseFloat(rezept.ZUTAT.NETTOPREIS) * parseFloat(new URLSearchParams(window.location.search).get("anzahl")));
        cardBody.classList.add("zutaten")
        textP.appendChild(text);
        textP1.appendChild(other);
        textP2.appendChild(other1);
        textP5.appendChild(other4);
        textP2.classList.add("preis");
        cardBody.appendChild(textP)
        cardBody.appendChild(textP1)
        cardBody.appendChild(textP5)
        cardBody.appendChild(textP2)
        rezeptEinzelPreis += parseFloat(rezept.MENGE) * parseFloat(rezept.ZUTAT.NETTOPREIS)
        const element = document.getElementById("js-bestellen");
        element.appendChild(cardBody);
    })
    const rezeptPreisText = document.createTextNode("Rezeptpreis: " + rezeptEinzelPreis + " Euro");
    const anzahlText = document.createTextNode("Anzahl: " + parseInt(new URLSearchParams(window.location.search).get("anzahl")))
    const other4 = document.createTextNode("Gesamtpreis: " + preisTotal + " Euro");
    let rezeptPreis = document.createElement("h3");
    let preis = document.createElement("h3");
    let anzahl = document.createElement("h3");
    anzahl.classList.add("anzahl");
    rezeptPreis.appendChild(rezeptPreisText)
    rezeptPreis.classList.add("rezept-preis")
    anzahl.appendChild(anzahlText)
    anzahl.classList.add("rezept-preis")
    preis.appendChild(other4);
    preis.classList.add("rezept-preis")
    let elementPreis = document.getElementById("js-preis");
    elementPreis.appendChild(rezeptPreis);
    elementPreis.appendChild(anzahl);
    elementPreis.appendChild(preis);
    let elementButton = document.getElementById("js-bestellung");
    let button = document.createElement("button");
    button.innerHTML = "Jetzt kaufen";
    button.classList.add("btn");
    button.classList.add("btn-success");
    button.classList.add("bestell-button");
    button.onclick = function() {bestellen()};
    elementButton.appendChild(button);
}

function selectRezept(){
    fetch('http://localhost:8080/api/v1/REZEPTINHALT/belongs/ZUTAT?limit=100')
        .then(response => response.json())
        .then(result =>{
            rezeptinhalt = result;
        })
        .catch((error) => console.log('error', error))
        .finally(() => {
            buildRezeptInhaltZutat()
        });
    return rezeptinhalt
}

function bestellen() {
    fetch('http://localhost:8080/api/v1/BESTELLUNG', {
        method: 'POST',
        body: JSON.stringify({
            KUNDENNR: 1111,
            BESTELLDATUM: new Date().toLocaleDateString(),
            RECHNUNGSBETRAG: preisTotal
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).finally(() =>{
        let bestellNummer = 0;
        fetch('http://localhost:8080/api/v1/BESTELLUNG/count?limit=100000')
            .then(response => response.json())
            .then(result =>{
                bestellNummer = result;
            })
            .catch((error) => console.log('error', error))
            .finally(() => {
                fetch('http://localhost:8080/api/v1/BESTELLUNG_REZEPT', {
                    method: 'POST',
                    body:JSON.stringify({
                        BESTELLNR: bestellNummer.count,
                        REZEPTID: parseInt(new URLSearchParams(window.location.search).get("rezept")),
                        STKZAHL: parseInt(new URLSearchParams(window.location.search).get("anzahl"))
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            });
        let url = new URL(window.location.href)
        url.pathname = "/html/bestellungerfolgreich";
        window.location = url;
    });
}

selectRezept();
