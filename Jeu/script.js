
const jeuNombreCache = () => {
    //Parametres du jeu: 
    let ParametresJeu= {
        1 : [10, 10],         // intervalle: de 0 à 10    &&    10 tentaives
        2 : [50, 5],   // intervalle: de 0 à 50    &&    5 tentaives
        3 : [100, 3]      // intervalle: de 0 à 100   &&    3 tentaives
    }
    console.log(ParametresJeu[1]);
    //Debut du jeu:

    alert("Bienvenue dans le jeu du nombre caché");
    let choix = prompt("choisissez le niveau de difficulté: \n1-Facile \n2-Intérmédiaire \n3-Difficile ");
    // ajouter controle de saisie
    
    niveauDifficulte = determinerNiveauDifficulte(choix);
    let nombreTentatives = (ParametresJeu.niveauDifficulte())[1];
    alert(do333333);
    let nombreCache = genererNombre(niveauDifficulte-1, ParametresJeu); 
    
    let reponse = prompt("Devinez le chiffre:");
    while( nombreTentatives>0  && reponse!=nombreCache){
        reponse = prompt("Votre réponse est fausse :( devinez un autre chiffre:");
        nombreTentatives--;
    }
    if (reponse==nombreCache) {
        alert("Vous avez gagné!!!");
    }
    else {
        alert("Vous avez perdu :(");
    }

}

const genererNombre = (niveauDifficulte, ParametresJeu ) => {
    return Math.floor(Math.random() * ParametresJeu[niveauDifficulte][0]);
}

const determinerNiveauDifficulte = (choix) => {
    if (choix==1) return "Facile";
    if (choix==2) return "Intermediaire";
    if (choix==3) return "Difficile";
}


jeuNombreCache();

let ParametresJeu= {
    Facile : [10, 10],         // intervalle: de 0 à 10    &&    10 tentaives
    Intermediaire : [50, 5],   // intervalle: de 0 à 50    &&    5 tentaives
    Difficile : [100, 3],      // intervalle: de 0 à 100   &&    3 tentaives
    
}

console.log(ParametresJeu.Facile());