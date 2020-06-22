var users = []
function getusers() {
    const Http = new XMLHttpRequest();
    const url = 'https://jsonplaceholder.typicode.com/users';
    Http.open("GET", url);
    Http.send();

    // cette fonction nous renvoie la réponse que l'api nous a retourné
    Http.onreadystatechange = (e) => {
        users = JSON.parse(Http.responseText)
        console.log(users)
        //Julianne.OConner@kory.org
    }
}


function checkuser() {

    for (let i = 0; i < users.length; i++) {
        if (users[i].email == "Julianne.OConner@kory.org") {
            console.log("hello exist")
        }
    }
}



// fonction qui est executée quand tout le HTML a fini de charger
window.addEventListener('load', (event) => {

})