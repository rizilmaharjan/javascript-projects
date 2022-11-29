(function(){
    "use strict";
    const answer = document.getElementById("answer");
    
    const form = document.getElementById("convert");
    form.addEventListener("submit",function(evt){
        evt.preventDefault();
        const distance =parseFloat(document.getElementById("distance").value);
        const convert = (distance*1.609344).toFixed(3); /* rounded to 3 digits */ 
        if(distance){
            answer.innerHTML = `<h2>${convert} KM</h2>`				
        }
        else{
            answer.innerHTML = "<h2>Please Provide a Number!</h2>";
        }
    });
})();
