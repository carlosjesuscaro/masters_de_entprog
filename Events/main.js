function showParagraph(){
    //document.getElementById("p2Hide").classList.remove("hidden");
    var p2h = document.getElementById("p2Hide");
    if (p2h.classList.contains("hidden")){
        p2h.classList.remove("hidden");
    } else {
        p2h.classList.add("hidden");
    }
}

function addP(){
    let container = document.getElementById("pContainer");
    let p="<p>This paragraph has been added on click</p>";
    container.innerHTML += p;
}

var button = document.getElementById("AddP").addEventListener("click", addP);