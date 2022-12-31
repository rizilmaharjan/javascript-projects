const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b4a4353689msh9a63c61d5b36c90p176047jsnaf301a4efec5',
		'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
	}
};

const dict = (inp_word)=>{

	fetch('https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=' + inp_word, options)
	.then(response => response.json())
	.then(response => {
		word.innerHTML = response.list[2].word;
		meaning1.innerHTML= response.list[1].definition;
		meaning2.innerHTML= response.list[2].definition;
		meaning3.innerHTML= response.list[3].definition;

		example1.innerHTML= response.list[3].example;
		example2.innerHTML= response.list[4].example;

		
		})
	.catch(err => console.error(err));

}
dict("welcome")
my_button.addEventListener("click",(e)=>{
	e.preventDefault();
	dict(inp.value);
})
