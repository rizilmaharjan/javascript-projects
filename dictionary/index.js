const options = {
	method: "GET",
	headers: {
		'X-RapidAPI-Key': 'b4a4353689msh9a63c61d5b36c90p176047jsnaf301a4efec5',
		'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com',
	},
};


const dict = (inp_word)=>{

    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + inp_word, options)
	.then(response => response.json())
	.then(response => {

    word.innerHTML = response.word;
        meaning.innerHTML = response.definition;
        console.log(response)
 })
        
	.catch(err => console.error(err));
}

dict("welcome");

my_button.addEventListener("click",(event) =>{
    event.preventDefault();
    dict(inp.value)
})