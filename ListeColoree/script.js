let listeElements = document.getElementsByClassName("element");



for (let i=0; i<listeElements.length; i++) {
    listeElements[i].addEventListener('click', function() {this.style.color = getRandomColor(); });
    //(e) => {e.target.style.color=getRandomColor();} doesnt work, alech?
}

const getRandomColor = () => {
    var r = Math.floor(Math.random() * 256); 
    var g = Math.floor(Math.random() * 256); 
    var b = Math.floor(Math.random() * 256);
    return ('rgb(' + r + ', ' + g + ', ' + b + ')');
}