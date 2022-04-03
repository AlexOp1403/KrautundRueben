let preisTotal = 0;
let zutaten= new URLSearchParams(window.location.search).getAll("zutat")

function buildZutatUbersicht() {
    let orderedZutat;
    let gesamtPreis = 0;
    let other5 = document.createElement("p");
    let other4 = document.createElement('p');

    zutaten.forEach( zutat => {
        fetch('http://localhost:8080/api/v1/ZUTAT/' + zutat + '?limit=10000')
            .then(response => response.json())
            .then(result =>{
                orderedZutat = result;
            })
            .catch((error) => console.log('error', error))
            .finally(() => {
                let card = document.createElement("div");
                card.setAttribute('id',orderedZutat.ZUTATENNR)
                let cardBody = document.createElement("div");
                let textP = document.createElement("h2");
                let textP1 = document.createElement("p");
                let textP2 = document.createElement("h3");
                const text = document.createTextNode(orderedZutat.BEZEICHNUNG);
                const other = document.createTextNode(orderedZutat.EINHEIT + ": " + orderedZutat.NETTOPREIS + ' Euro');
                const other1 = document.createTextNode("Preis: " + parseFloat(orderedZutat.NETTOPREIS) + " Euro");
                gesamtPreis += orderedZutat.NETTOPREIS;
                preisTotal +=  gesamtPreis;
                card.classList.add("zutaten")
                textP.appendChild(text);
                textP1.appendChild(other);
                textP2.appendChild(other1);
                textP2.classList.add("preis");
                cardBody.appendChild(textP)
                cardBody.appendChild(textP1)
                cardBody.appendChild(textP2)
                card.appendChild(cardBody);
                const element = document.getElementById("js-bestellen");
                element.appendChild(card);
                other4.innerHTML= "Preis: " + gesamtPreis + " Euro";
                other5.innerHTML = "Gesamtpreis: " + preisTotal + " Euro"
            })
    })
    let rezeptPreis = document.createElement("h3");
    let preis = document.createElement("h3");
    rezeptPreis.classList.add("rezept-preis")
    preis.appendChild(other5);
    preis.classList.add("rezept-preis")
    let elementPreis = document.getElementById("js-preis");
    elementPreis.appendChild(rezeptPreis);
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
    }).finally(() => {
        let bestellNummer = 0;
        let rezeptNummer = 0;
        fetch('http://localhost:8080/api/v1/BESTELLUNG/count?limit=10000')
            .then(response => response.json())
            .then(result => {
                bestellNummer = result;
            })
            .catch((error) => console.log('error', error))
            .finally(() => {
                fetch('http://localhost:8080/api/v1/REZEPT/count?limit=10000')
                    .then(response => response.json())
                    .then(result => {
                        rezeptNummer = result;
                    })
                    .catch((error) => console.log('error', error))
                    .finally(() => {
                        let rezeptName = "";
                        zutaten.forEach(zutat => {
                            rezeptName += zutat + ";"
                        })
                        fetch('http://localhost:8080/api/v1/REZEPT', {
                            method: 'POST',
                            body: JSON.stringify({
                                REZEPTID: rezeptNummer.count + 1,
                                REZEPTNAME: rezeptName
                            }),
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }).finally( () => {
                            fetch('http://localhost:8080/api/v1/BESTELLUNG_REZEPT', {
                                method: 'POST',
                                body: JSON.stringify({
                                    BESTELLNR: bestellNummer.count,
                                    REZEPTID: rezeptNummer.count + 1,
                                    STKZAHL: 1
                                }),
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                                    }).finally(() => {
                                        const zutatenObjekt = {};
                                        zutaten.forEach(
                                            function (x) {
                                                zutatenObjekt[x] = (zutatenObjekt[x] || 0) + 1;
                                            });
                                        Object.keys(zutatenObjekt).forEach(zutat => {
                                            fetch('http://localhost:8080/api/v1/REZEPTINHALT', {
                                                method: 'POST',
                                                body: JSON.stringify({
                                                    REZEPTID: rezeptNummer.count + 1,
                                                    REZEPTNAME: rezeptName,
                                                    MENGE: parseInt(zutatenObjekt[zutat]),
                                                    ZUTATENNR: zutat
                                                }),
                                                headers: {
                                                    'Content-Type': 'application/json'
                                                }
                                            });
                                        })
                                    });
                                    let url = new URL(window.location.href)
                                    url.pathname = "/html/bestellungerfolgreich";
                                    window.location = url;
                                });
                            })
                        });
            });
}
buildZutatUbersicht();
