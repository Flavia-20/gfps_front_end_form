const url = "https://formularioapijava.azurewebsites.net/formulario";

/*const url = fetch("https://formularioapijava.azurewebsites.net/formulario")
console.log(url)*/

const FormCabecalho = document.querySelector(".FormCabecalho");
const FormCardPergunta = document.querySelector("#container");

async function getForm(){
    try{
        const response = await fetch(url);
        console.log(response);
    
        const data = await response.json();
        console.log(data)
    
        data.forEach((formulario)=>{
        
            const divform = document.createElement("div");
            const descricaoFormulario = document.createElement("p");

            const CardDivPergunta = document.createElement('div');
            const FormCardPergunta = document.createElement('div');
            const pergunta = document.createElement('p');

            descricaoFormulario.innerHTML = formulario.descricaoFormulario;
            pergunta.innerHTML = formulario.perguntasEntities[0].informacaoPergunta;  
           
            CardDivPergunta.setAttribute("class", "CardDiv");
            FormCardPergunta.setAttribute("class", "FormCardPergunta");

            divform.appendChild(descricaoFormulario);
            FormCardPergunta.appendChild(pergunta);
        
            FormCabecalho.appendChild(divform);
            container.appendChild(FormCardPergunta);
        });

    } catch (error) {
        console.error('Erro:', error.message);
    }
}
getForm()
