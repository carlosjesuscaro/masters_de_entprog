console.log("Testing");

var autoDiv = document.getElementById("automatedDiv");
autoDiv.innerHTML = "<p>This paragraph was added with JS</p>";
autoDiv.style.color = 'red';

var divs  = document.getElementsByTagName('div');
for (let div of divs){
    if (div.classList.contains("section")){
        div.style.backgroundColor = 'orange';
    } else {
        div.classList.add("subsection");
    }
}