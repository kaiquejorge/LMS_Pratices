var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.lenght; i++) {
    acc[i].addEventListener("click", function() {
        
        this.classList.toggle("active");

        var painel = this.nextElementSibling;
        if (painel.style.display === "block") {
            painel.style.display = "none";
        } else {
          painel.style.display = "block";
        }
    });      
}