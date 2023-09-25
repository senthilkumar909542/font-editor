let color = Array.from(document.querySelectorAll(".format>div.color>div"));
let style = Array.from(document.querySelectorAll(".format>div.style>div"));
let background = Array.from(document.querySelectorAll(".format>div.background>div"));

let output;
function myfunction() {
    output = document.querySelector("input").value;
    if (output.length != 0) {

        document.getElementById("output").innerHTML = output;
        document.querySelector("input").value = "";

        color.forEach((x) => {
            x.addEventListener('click', (x) => {
                document.querySelector("#output").style.color = x.target.classList[1];
            });
        });


        style.forEach((x) => {
            x.addEventListener('click', (x) => {
                let style_ = document.querySelector("#output").classList;
                style_.remove(document.querySelector("#output").classList[0]);
                style_.add(x.target.classList[0]);

            });
        });

        background.forEach((x) => {
            x.addEventListener('click', (x) => {
                document.querySelector("#background").style.background = x.target.classList[1];
            });
        });

    }
}

document.getElementById("l").addEventListener('click', () => {
    document.getElementById("l").classList.add("hide");
    document.getElementById("d").classList.remove("hide");
    document.getElementById("d").classList.remove("unhide");
    document.getElementById("body").classList.add("body");
    document.getElementById("container-color").classList.add("body-2");
    document.getElementById("button-color").classList.add("box-color");
    document.getElementById("font-color-1").classList.add("font-color");
    document.getElementById("font-color-2").classList.add("font-color");
    document.getElementById("font-color-3").classList.add("font-color");
    document.getElementById("font-color-4").classList.add("font-color");
});

document.getElementById("d").addEventListener('click', () => {
    document.getElementById("d").classList.add("hide");
    document.getElementById("l").classList.remove("hide");
    document.getElementById("l").classList.remove("unhide");
    document.getElementById("body").classList.remove("body");
    document.getElementById("container-color").classList.remove("body-2");
    document.getElementById("background").classList.remove("box-color");
    document.getElementById("button-color").classList.remove("box-color");
    document.getElementById("font-color-1").classList.remove("font-color");
    document.getElementById("font-color-2").classList.remove("font-color");
    document.getElementById("font-color-3").classList.remove("font-color");
    document.getElementById("font-color-4").classList.remove("font-color");
});




