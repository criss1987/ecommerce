
let params = {}
let produits = [{
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

window.addEventListener('load', (event) => {



    // (expression régulière)
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        params[key] = value;
        for (let j = 0; j < produits.length; j++) {
            if (produits[j].id == params.id) {
                document.getElementById("image").src = produits[j].src
                document.getElementById("titre-produit").innerHTML = produits[j].nom
                document.getElementById("soustitre-produit").innerHTML = produits[j].marque
                document.getElementById("rectangle-prix").innerHTML = produits[j].prix + "€"
                document.getElementById("description-produit").innerHTML = produits[j].description
            }
        }
        console.log(params.id)

    });



});



function next() {
    let nextId = parseInt(params.id) + 1
    if (nextId <= produits.length) {
        window.location = "produit.html?id=" + nextId

    } else {
        nextId = 1
        window.location = "produit.html?id=" + nextId
    }
}

function previous() {
    let previousId = parseInt(params.id) - 1

    if (previousId <= 0) {
        previousId = produits.length
        window.location = "produit.html?id=" + previousId
    } else { window.location = "produit.html?id=" + previousId }
} 
