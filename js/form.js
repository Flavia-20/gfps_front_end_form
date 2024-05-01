const url = "https://formularioapijava.azurewebsites.net/formulario";

/*const url = fetch("https://formularioapijava.azurewebsites.net/formulario")
console.log(url)*/

const FormCabecalho = document.querySelector(".FormCabecalho");
const FormCard = document.querySelector(".FormCard");

async function getForm(){
    try{
        const response = await fetch(url);
        console.log(response);
    
        const data = await response.json();
        console.log(data)
    
        data.forEach((formulario)=>{
            const divpergunta = document.createElement('div');
            const pergunta = document.createElement('p');
            const divform = document.createElement("div");
            const descricaoFormulario = document.createElement("p");

            descricaoFormulario.innerHTML = formulario.descricaoFormulario;
            pergunta.innerHTML = formulario.perguntasEntities[0].informacaoPergunta;  
           
            divform.appendChild(descricaoFormulario);
            divpergunta.appendChild(pergunta);
        
            FormCabecalho.appendChild(divform);
            FormCard.appendChild(divpergunta);
        });

    } catch (error) {
        console.error('Erro:', error.message);
    }
}
getForm()
