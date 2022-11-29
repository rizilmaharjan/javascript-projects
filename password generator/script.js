let inp = document.getElementById("psw");
let button = document.getElementById("btn")
let copy= document.getElementById("copy")
let after_copied = document.getElementById("after")

let generate_psw = (len)=>{

    let Your_password = ""

    let num = [0,1,2,3,4,5,6,7,8,9]
    let char = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let special_char = ["@", "#", "$", "£", "%", "&"]
    let i = 0

    while(i<len){
        Your_password += num [Math.floor(Math.random()*num.length)]
        Your_password += char [Math.floor(Math.random()*char.length)]
        Your_password += special_char [Math.floor(Math.random()*special_char.length)]
        i+=3
    }
    Your_password = Your_password.substr(0,len)

    return Your_password
}


button.addEventListener("click",()=>{
    inp.innerHTML = generate_psw(10)
    after_copied.innerHTML = ""
})

copy.addEventListener("click",()=>{
    let result1 = inp.textContent;
    navigator.clipboard.writeText(result1);
    after_copied.innerHTML = "You password has been sucessfully copied!!"

})

