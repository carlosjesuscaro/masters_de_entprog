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

/*
This is one way to do it

function mouseEnter(){
    let target = document.getElementById("mouseEnterLeave");
    target.style.color = "red";
}

function mouseLeave(){
    let target = document.getElementById("mouseEnterLeave");
    target.style.color = "black";
}

document.getElementById("mouseEnterLeave").addEventListener("mouseenter", mouseEnter);
document.getElementById("mouseEnterLeave").addEventListener("mouseleave", mouseLeave);

*/

// Here is another way:
function mouseEnter(event){
    event.srcElement.style.color = "red";
}

function mouseLeave(event){
    event.srcElement.style.color = "black";
}

let enterLeave = document.getElementsByClassName("mouseEnterLeave");

for (let div of enterLeave){
    div.addEventListener("mouseenter", mouseEnter);
    div.addEventListener("mouseleave", mouseLeave);
}

function scrollSquare(event){
    //console.log(event)
    let square = document.getElementById("squareToMove");
    square.style.left = square.offsetLeft + event.deltaY + 'px';
}

document.getElementById("scrollContainer").addEventListener("wheel", scrollSquare);
