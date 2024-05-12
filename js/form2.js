const url = "https://formularioapijava.azurewebsites.net/formulario";

/*const url = fetch("https://formularioapijava.azurewebsites.net/formulario")
console.log(url)*/

//pegando as tags do HTML
const FormCabecalho = document.querySelector(".CardCabecalho");
const FormCardPergunta = document.querySelector("#container");

async function getForm(){
    try{
        const response = await fetch(url);
        console.log(response);
    
        const data = await response.json();
        console.log(data)
    
        data.forEach((formulario)=>{
            //trabalhando com a descrição do formulário
            const divform = document.createElement("div");
            const descricaoFormulario = document.createElement("p");

            descricaoFormulario.innerHTML = formulario.descricaoFormulario;

            divform.setAttribute("class","FormCabecalho");

            divform.appendChild(descricaoFormulario);
            FormCabecalho.appendChild(divform);

            //trabalhando com as perguntas 
            const CardDivPergunta = document.createElement('div');
            const FormCardPergunta = document.createElement('div');
            const pergunta = document.createElement('p');
            
            pergunta.innerHTML = formulario.perguntasEntities[0].informacaoPergunta;  
            
            CardDivPergunta.setAttribute("class", "CardDiv");
            FormCardPergunta.setAttribute("class", "FormCardPergunta");

            FormCardPergunta.appendChild(pergunta);
            CardDivPergunta.appendChild(FormCardPergunta);
        
            container.appendChild(CardDivPergunta);
        });

    } catch (error) {
        console.error('Erro:', error.message);
    }
}
getForm()
