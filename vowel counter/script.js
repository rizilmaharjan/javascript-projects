(function(){

    "use strict"
    const information = document.querySelector("#info");
    information.addEventListener("submit",function(evt){
        evt.preventDefault();
        const para = evt.target.elements["paragraph"].value;
        evt.target.elements["paragraph"].value = "";
        let count = 0;

        for(let i=0;i<para.length;i++){
            if((para[i] == "a" || para[i] == "A") || (para[i] == "e" ||para[i] == "E") || (para[i] == "i" ||para[i] == "I") || (para[i] == "o" || para[i] =="O") || (para[i] == "u" || para[i] =="U")){
                count++;

            }
        }

        alert(`There are ${count} vowels in the sentence`);
    });
})();