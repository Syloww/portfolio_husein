setTimeout(function() {
    var pop = document.querySelector(".pop");
    
    pop.parentNode.removeChild(pop);
}, 2000); // Supprime la div après 2 secondes