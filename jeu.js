var nb1 = document.querySelector('.nb1')
var nb2 = document.querySelector('.nb2')
var operateur = document.querySelector('.oper')
var Message = document.querySelector('.Message')
var score = document.querySelector('.score')
var link = document.querySelector('.link')
var section = document.querySelector('section')
var compteur = 0
var opera = ['+', '-', '*']


//Nombres Aléatoires début du jeu
random1 = Math.random()*101 << 0
random2 = Math.random()*101 << 0
//Insérer les nombres au hasard dans les variables nb1 et nb2
nb1.innerHTML = random1
nb2.innerHTML = random2

//Générer des nombres aléatoires entre 1 et 4
operaRandom = Math.floor(Math.random()*3) + 1
console.log(operaRandom-1);
console.log(typeof(opera[operaRandom-1]));
operateur.innerHTML = opera[operaRandom-1]

// Fonction de vérification du résultat
function verifier() {
    // Récuperer le résultat entré par l'utilisateur
    var resultat = document.querySelector('.resultat').value
    if ((opera[operaRandom-1] == '+' && random1 + random2 == resultat) || (opera[operaRandom-1] == '-' && random1-random2 == resultat) || (opera[operaRandom-1] == '*' && random1*random2 == resultat)) {
        Message.style.background = "green"
        Message.innerHTML = "Correcte"
        //Nombres Aléatoires début du jeu
        random1 = Math.random()*101 << 0
        random2 = Math.random()*101 << 0
        //Insérer les nombres au hasard dans les variables nb1 et nb2
        nb1.innerHTML = random1
        nb2.innerHTML = random2
        resultat.innerHTML = ""
        compteur = compteur + 1
        operaRandom = Math.floor(Math.random()*3) + 1
        operateur.innerHTML = opera[operaRandom-1]
    }
    /* else if (operaRandom == 1 && random1-random2 == resultat) {

    } */
    else{
        Message.style.background = "red"
        Message.innerHTML = "Vous avez perdu"
        section.innerHTML = ""
        score.innerHTML = `Score Final <i class="fa fa-smile-o"></i>  </br> <span>${compteur}</span> `
        link.style.display = "block"
    }
}
