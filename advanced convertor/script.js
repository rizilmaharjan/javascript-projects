
(function () {
    "using strict";
    let current = "miles";
    const heading = document.querySelector("h1");
    const paragraph = document.querySelector("p");
    const form = document.getElementById("convert");
    const answer = document.getElementById("answer");


    document.addEventListener("keydown", function (event) {
        const key = event.code;

        if (key === "KeyK") {
            current = "kilometers";
            heading.innerHTML = "Kilometers to Miles Convertor";
            paragraph.innerHTML = "Type in a number of kilometers and click the button to convert the distance to Miles";

        }

        else if (key === "KeyM") {
            current = "miles";
            heading.innerHTML = "Miles to Kilometers convertor";
            paragraph.innerHTML = "Type in a number of Miles and click the button to convert the distance to Kilometers";
        }

    });

    form.addEventListener("submit", function (evt) {
        evt.preventDefault();
        const input = parseFloat(document.getElementById("distance").value);



        if (input) {
            if (current == "miles") {
                const solution = (input * 1.60934).toFixed(3);
                answer.innerHTML = `<h2>${solution}KM</h2>`;
            }
            else {

                const solution = (input * 0.621371).toFixed(3);
                answer.innerHTML = `<h2>${solution}Miles</h2>`;
            }


        }
        else {
            answer.innerHTML = "<h2>Please Enter the Number</h2>";
        }

    });



})();

