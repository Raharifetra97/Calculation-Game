document.addEventListener('DOMContentLoaded', () => {
    var nb1 = document.querySelector('.nb1');
    var nb2 = document.querySelector('.nb2');
    var operateur = document.querySelector('.oper');
    var message = document.querySelector('.Message');
    var score = document.querySelector('.score');
    var link = document.querySelector('.link');
    var section = document.querySelector('section');
    var resultScrore = document.querySelector('.scoresult');
    var compteur = 0;
    var opera = ['+', '-', '*'];
    var random1, random2, operaRandom;

    // Fonction pour générer des nombres et un opérateur aléatoires
    function genererCalcul() {
        random1 = Math.floor(Math.random() * 101);
        random2 = Math.floor(Math.random() * 101);
        operaRandom = Math.floor(Math.random() * 3);
        
        nb1.innerHTML = random1;
        nb2.innerHTML = random2;
        operateur.innerHTML = opera[operaRandom];
    }

    // Fonction qui évaluent le résultat de l'utilisateur
    function resultTest(n) {
        if (n <= 4) {
            message.style.background = "red";
            message.innerHTML = "Vous avez perdu";
            resultScrore.innerHTML = `Very Bad score`;
            score.innerHTML = `Score Final <br> <span>${n}</span>`;
            link.style.display = "block";
        }
        else if (n <= 9) {
            message.style.background = "red";
            message.innerHTML = "Vous avez perdu";
            resultScrore.innerHTML = `Bad score`;
            score.innerHTML = `Score Final <br> <span>${n}</span>`;
            link.style.display = "block";
        }
        else if (n <= 14) {
            message.style.background = "red";
            message.innerHTML = "Vous avez gagné";
            resultScrore.innerHTML = `Good score`;
            score.innerHTML = `Score Final <br> <span>${n}</span>`;
            link.style.display = "block";
        }
        else if (n <= 20) {
            message.style.background = "red";
            message.innerHTML = "Vous avez gagné";
            resultScrore.innerHTML = `Very Good score`;
            score.innerHTML = `Score Final <br> <span>${n}</span>`;
            link.style.display = "block";
        }
        else {
            message.style.background = "red";
            message.innerHTML = "Vous avez gagné";
            resultScrore.innerHTML = `Excellent`;
            score.innerHTML = `Score Final <br> <span>${n}</span> `;
            link.style.display = "block";
        }
    }

    // Appel initial pour générer un calcul au chargement de la page
    genererCalcul();

    // Fonction de vérification du résultat
    window.verifier = function() {
        var resultat = parseInt(document.querySelector('.resultat').value);

        // Vérification que le résultat entré est un nombre
        if (isNaN(resultat)) {
            message.style.background = "orange";
            message.innerHTML = "Veuillez entrer un nombre.";
            return;
        }

        // Vérification du calcul
        var correct;
        if (opera[operaRandom] == '+') {
            correct = (random1 + random2 === resultat);
        } else if (opera[operaRandom] == '-') {
            correct = (random1 - random2 === resultat);
        } else if (opera[operaRandom] == '*') {
            correct = (random1 * random2 === resultat);
        }

        if (correct) {
            message.style.background = "green";
            message.innerHTML = "Correcte";
            compteur++;
            score.innerHTML = `Score: ${compteur}`;
        } else {
            section.innerHTML = "";
            resultTest(compteur);
            return;
        }

        // Générer un nouveau calcul
        genererCalcul();
        // Réinitialiser le champ de résultat
        document.querySelector('.resultat').value = "";
    };
});
