const url = "https://apiformulariojava.azurewebsites.net/formulario";

/*const url = fetch("https://apiformulariojava.azurewebsites.net/formulario")
console.log(url)*/

//pegando as tags do HTML
//const FormCabecalho = document.querySelector(".CardCabecalho");
const question = document.querySelector(".question");

async function getForm(){
    try{
        const response =  await fetch(url);
        console.log(response);
    
        const data = await response.json();
        console.log(data)
    
        data.forEach((formulario)=>{
            //trabalhando com a descrição do formulário
            const divform = document.createElement("div");
            const descricaoFormulario = document.createElement("p");

            descricaoFormulario.innerHTML = formulario.descricao;

            divform.setAttribute("class","FormCabecalho");

            const perguntaElemento = document.createElement('p');
            const textArea = document.createElement('textarea');

            perguntaElemento.innerHTML = formulario.perguntasEntities[16].descricao;
            perguntaElemento.setAttribute('data-id', formulario.perguntasEntities[16].id);

            textArea.setAttribute('name','q1');
            textArea.setAttribute('rows', '4');
            textArea.setAttribute('cols', '50');
            textArea.setAttribute('placeholder', 'Sua resposta');

            question.appendChild(perguntaElemento);
            question.appendChild(textArea);
          
        });
    

    } catch (error) {
        console.error('Erro:', error.message);
    }

}

getForm()


