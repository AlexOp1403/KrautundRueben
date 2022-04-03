   let rezeptElement = [];

    function selectZutat(){
    let zuaten = [];
        fetch('http://localhost:8080/api/v1/ZUTAT')
            .then((response) => response.json())
            .then((result) =>{
                zuaten = result;
            })
            .catch((error) => console.log('error', error))
        return zuaten;
    }

