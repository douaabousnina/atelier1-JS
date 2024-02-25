const texte = document.getElementById("texte");
const couleur = document.getElementById("couleur");
const taille = document.getElementById("taille");
const police = document.getElementById("police");

const changerCouleur = () => {
    texte.style.color = couleur.value;
}

const changerPolice = () => {
    texte.style.fontFamily=police.value;
}

const changerTaille = () => {
    texte.style.fontSize=taille.value + "px";
}

couleur.addEventListener('change', changerCouleur);
taille.addEventListener('change', changerTaille);
police.addEventListener('change', changerPolice);
