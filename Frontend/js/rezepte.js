let rezept = [];

// Der Call zur Api
function selectRezept(){
    fetch('http://localhost:8080/api/v1/REZEPT?limit=10000')
        .then(response => response.json())
        .then(result =>{
            rezept = result;
        })
        .catch((error) => console.log('error', error))
        .finally(() => {
            buildRezepte()
        });
    return rezept
}

//HTML zusammenbauen
function buildRezepte () {
    rezept.forEach(rezept => {
        let card = document.createElement("div");
        card.setAttribute('id',rezept.REZEPTID)
        let url = new URL(window.location.href);
        url.pathname = "/html/details";
        url.searchParams.set("rezept", rezept.REZEPTID)
        card.onclick = function() {location.replace(url)};
        let cardBody = document.createElement("div");
        const text = document.createTextNode(rezept.REZEPTNAME);
        card.classList.add("card")
        card.classList.add("rezept")
        cardBody.classList.add("card-body")
        cardBody.appendChild(text);
        card.appendChild(cardBody);
        const element = document.getElementById("js-rezepte");
        element.appendChild(card);
    })
}

selectRezept();
