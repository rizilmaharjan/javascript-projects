let string = ""
const buttons  = document.querySelectorAll(".my_btn");
const display = document.getElementById("output");
const backspace = document.getElementById("back")
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (e)=>{

        if(e.target.value === "="){
            string = eval(string)
            document.querySelector("input").value = string
            
        }
        else if(e.target.value == "C"){
           string = " ";
           display.value = string
        }
        else if(e.target.value == "<="){
             string = string.substring(0,string.length-1)
            display.value = string

        }
       else if(e.target.value == "e"){
            const e = 2.718
            string =  string + 2.718
            display.value = string
       }
       
        else{

            string = string + e.target.value;
            display.value = string

        }



    })
})