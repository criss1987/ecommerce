function getpokemons() {
    const Http = new XMLHttpRequest();
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=100';
    Http.open("GET", url);
    Http.send();

    // cette fonction nous renvoie la réponse que l'api nous a retourné
    Http.onreadystatechange = (e) => {
        console.log(e)
        let divprincipal = document.getElementById("div-principal")
        let pokemons = JSON.parse(Http.responseText).results;
        for (let i = 0; i < pokemons.length; i++) {
            let g = i + 1;
            console.log(pokemons[i].url);
            let poke = document.createElement("div");
            let photopoke = document.createElement("img");
            poke.innerHTML = pokemons[i].name;
            photopoke.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/" + g + ".png"
            divprincipal.appendChild(poke);
            divprincipal.appendChild(photopoke);
        }
        console.log("----------------------")

    }
}



// fonction qui est executée quand tout le HTML a fini de charger
window.addEventListener('load', (event) => {

})

[
    {
        mecanic: 1,
        automatic: 3,
        availablePlaces: 19,
        x: 12.32,
        y: 19.32
    },
    {
        mecanic: 1,
        automatic: 3,
        availablePlaces: 19
    }, {
        mecanic: 1,
        automatic: 3,
        availablePlaces: 19
    }, {
        mecanic: 1,
        automatic: 3,
        availablePlaces: 19
    }, {
        mecanic: 1,
        automatic: 3,
        availablePlaces: 19
    }, {
        mecanic: 1,
        automatic: 3,
        availablePlaces: 19
    }, {
        mecanic: 1,
        automatic: 3,
        availablePlaces: 19
    }, {
        mecanic: 1,
        automatic: 3,
        availablePlaces: 19
    }
]