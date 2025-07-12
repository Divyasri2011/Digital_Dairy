var adding_info = document.getElementById("add_events");
var delete_info = document.getElementById("cancel")
var a = document.querySelector(".popup");
var b = document.querySelector(".overlay");

function del(event){
    event.target.parentElement.remove();
}
adding_info.addEventListener("click", function () {
    a.style.display = "block";
    b.style.display = "block";
});

delete_info.addEventListener("click", function () {
    a.style.display = "none";
    b.style.display = "none";
});

var container = document.querySelector(".container");
var date = document.querySelector("#date");
var info = document.querySelector("#msg");
var add_event = document.querySelector("#add_info");

add_event.addEventListener("click", function (event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "info");
    div.innerHTML = `<h2>${date.value}</h2>
        <p>${info.value}</p>
        <button onclick = "del(event)">Delete</button>`;

    container.append(div);

    date.value = "";
    info.value = "";
    a.style.display = "none";
    b.style.display = "none" ;

})