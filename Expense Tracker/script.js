(function(){

    "use strict";
    const info = document.querySelector("#inputs");
   

    info.addEventListener("submit",function(evt){
        evt.preventDefault();
        const name = evt.target.elements["name"].value;
        const date = evt.target.elements["Date"].value;
        const amount = evt.target.elements["amount"].value;
       
        for(let i=0;i<3;i++){
            info.elements[i].value = "";   /* clearing the form */
        }

        
        
        const display_table = create_table(name,date,amount);
        document.querySelector("#main_table").appendChild(display_table);
        
    });

    function create_table(Name,Date,Amount){

        
        // var cont = document.querySelector("#main-table")
        const row = document.createElement("tr");
        

        const tab_data1 = document.createElement("td"); 
        const tab_data2 = document.createElement("td"); 
        const tab_data3 = document.createElement("td"); 
        const tab_data4 = document.createElement("button");
        
        tab_data1.innerText = Name;
        tab_data2.innerText = Date;
        tab_data3.innerText = (Amount);
        tab_data4.innerText = "remove";

        row.appendChild(tab_data1);
        row.appendChild(tab_data2);
        row.appendChild(tab_data3);
        row.appendChild(tab_data4);

        tab_data4.addEventListener("click",remove);

      


        return row;

       

    }
    function remove(evt){
        evt.target.parentElement.remove();
    }
   
})();