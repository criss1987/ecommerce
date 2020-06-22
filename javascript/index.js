let panier = []
let carrousel = [{
    url: "./images/technology1.jpeg",
    title: "Achetez des produits de qualité"
}, {
    url: "./images/technology2.jpeg",
    title: "The best products"
}, {
    url: "./images/technology3.jpg",
    title: "Plus gros que amazon"
}, {
    url: "./images/technology4.jpg",
    title: "Plus gros que cdiscount"
}]

let compteur = 0


// objet JSON
let liste = [{
    nom: "Scanner",
    prix: 79.99,
    marque: "Canon",
    livraison: 10,
    description: "Compact et abordable, ce scanner léger est idéal pour celles et ceux qui souhaitent bénéficier d'une numérisation directe par simple pression d'une touche.",
    src: "images/scanner.jpg",
    id: 1
}, {
    nom: "clavier",
    prix: 60,
    marque: "logitech",
    livraison: 7,
    description: "Switchs mécaniques GX avancés: conçus et testés à 100% pour offrir performances, réactivité et durabilité.Personnalisez l'expérience du clavier PRO X avec trois variantes de switchs amovibles.",
    src: "images/clavier.jpg",
    id: 2
}, {
    nom: "camera",
    prix: 79.99,
    marque: "hp",
    livraison: 5,
    description: "The HP Camera program allows you to configure and use the webcam to capture video and still images.",
    src: "images/cam.jpeg",
    id: 3
}, {
    nom: "casque",
    prix: 69.99,
    marque: "hyperx",
    livraison: 15,
    description: "Grâce à la nouvelle conception de son boîtier de commande audio USB et sa carte son intégrée, HyperX Cloud II amplifie l'audio et la voix pour créer une expérience de jeu Hi-Fi optimale. Vous serez toujours certain de tout entendre. Vous accédez à un monde de détails que les autres gamers ne connaîtront jamais : le bruissement d'une botte dans les feuilles, une course furtive dans une conduite. Les commandes indépendantes permettent de régler le volume de l'écoute et le niveau du micro. Vous pouvez aussi activer le son Surround 7.1 ou le micro.",
    src: "images/casque.jpg",
    id: 4

}, {
    nom: "mac book pro 16 pouces",
    prix: 2800,
    marque: "apple",
    livraison: 1,
    description: "Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook we’ve ever made. With an immersive 16-inch Retina display, superfast processors, next-generation graphics, the largest battery capacity ever in a MacBook Pro, a new Magic Keyboard, and massive storage, it’s the ultimate pro notebook for the ultimate user. The new MacBook Pro features a stunning 16-inch Retina display — the largest Retina display ever in a Mac notebook.It produces 500 nits of brightness for spectacular highlights and bright whites, while delivering deep blacks thanks to the precise photo alignment of liquid crystal molecules.And the P3 wide color gamut enables brilliant, true-to - life images and video.So no matter where you are, you’ll see your work in the best possible light.",
    src: "images/tourgamming.jpg",
    id: 5
}];

for (let i = 0; i < liste.length; i++) {
    let j = i + 1;
    console.log("le element " + j + " est " + liste[i].nom)
}

function ajouter(i) {
    let sum = 0;

    panier.push(liste[i]);
    console.log(panier);
    let modalBody = document.getElementById('modalBody');
    let item = document.createElement('div');
    item.innerHTML = liste[i].nom + " " + liste[i].prix + "Euros"
    modalBody.appendChild(item);
    for (let j = 0; j < panier.length; j++) {
        sum = sum + liste[i].prix;
        let total = document.getElementById('total');
        total.innerHTML = sum;
    }
    window.localStorage.setItem("panier", JSON.stringify(panier))
}

function vider() {
    panier = []
    document.getElementById("modalBody").innerHTML = "";
    window.localStorage.removeItem("panier")

}

function next() {
    compteur++;
    if (compteur >= carrousel.length) {
        compteur = 0;
    }
    document.getElementById("image-carrousel").src = carrousel[compteur].url
    document.getElementById("su-titre").innerHTML = carrousel[compteur].title
    document.getElementById("su-titre").className = "animated bounceIn"

    setTimeout(() => {
        document.getElementById("su-titre").className = ""

    }, 3000)
}

function previous() {
    compteur--;
    if (compteur < 0) {
        compteur = carrousel.length - 1
    }
    document.getElementById("image-carrousel").src = carrousel[compteur].url
    document.getElementById("su-titre").innerHTML = carrousel[compteur].title
}

function getpokemons() {
    const Http = new XMLHttpRequest();
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=100';
    Http.open("GET", url);
    Http.send();

    // cette fonction nous renvoie la réponse que l'api nous a retourné
    Http.onreadystatechange = (e) => {

        let pokemons = JSON.parse(Http.responseText).results;
        for (let i = 0; i < pokemons.length; i++) {
            console.log(pokemons[i].name)
        }
        console.log("----------------------")

    }
}

window.addEventListener('load', (event) => {

    setInterval(next, 5000)

    /*let test = document.createElement("h1") 
    test.innerHTML = "Bonjour mon test"
    document.getElementById("content").appendChild(test)*/

    for (let i = 0; i < liste.length; i++) {


        let test = document.createElement("div")
        test.className = "col-lg-3"
        test.innerHTML = `<div class="card" style="width: 100%;"> <img src="` + liste[i].src + `" class="card-img-top" style="height:200px !important" alt="..."> <div class="card-body" style="text-align:center;"> <h5 class="card-title">` + liste[i].nom + ` ` + liste[i].prix + ` €</h5> <p class="card-text">` + liste[i].description.slice(0, 100) + `...</p> <button class="btn btn-primary" onclick='ajouter(` + i + `)'>Ajouter au panier</button>  <br/><a href="produit.html?id=` + liste[i].id + `">Voir Plus</a> </div> </div>`;
        document.getElementById("row").appendChild(test)
    }
    panier = JSON.parse(window.localStorage.getItem("panier"))
    // condition d existence du panier
    if (panier) {
        for (let j = 0; j < panier.length; j++) {
            let modalBody = document.getElementById('modalBody');
            let item = document.createElement('div');
            item.innerHTML = panier[j].nom + " " + panier[j].prix + "Euros"
            modalBody.appendChild(item);
        }
    } else {
        panier = [];
    }



    // quand la page est chargée, on va récupérer l'email de localstorage et on va le donner au html
    let email = window.localStorage.getItem("email")
    document.getElementById("emailHeader").innerHTML = email;

});

function login() {
    let email = document.getElementById("emailLogin").value
    let password = document.getElementById("password").value
    window.localStorage.setItem("email", email)
    window.localStorage.setItem("password", password)
    alert('Login réussi')
    $('#modalLogin').modal('hide');

}
