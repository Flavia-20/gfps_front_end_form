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

            descricaoFormulario.innerHTML = formulario.descricao;

            divform.setAttribute("class","FormCabecalho");

            divform.appendChild(descricaoFormulario);
            FormCabecalho.appendChild(divform);

            //trabalhando com as perguntas 
            formulario.perguntasEntities.forEach((pergunta) => {

                const CardDivPergunta = document.createElement('div');
                const FormCardPergunta = document.createElement('div');
                const perguntaElemento = document.createElement('p');
                //const id = document.createElement('p');

                CardDivPergunta.setAttribute("class", "CardDiv");
                FormCardPergunta.setAttribute("class", "FormCardPergunta");
                       
                perguntaElemento.innerHTML = pergunta.descricao;
                //id.innerHTML = pergunta.id;

                //FormCardPergunta.appendChild(id);
                FormCardPergunta.appendChild(perguntaElemento);
                CardDivPergunta.appendChild(FormCardPergunta);

            
                container.appendChild(FormCardPergunta);

                pergunta.alternativaEntities.forEach((alternativas)=>{
                    //const input = document.createElement('input');
                    const respostaElemento = document.createElement('p');

                    //input.setAttribute("type","radio");
                   
                    respostaElemento.innerHTML = alternativas.descricao;

                    FormCardPergunta.appendChild(respostaElemento);
                    //FormCardPergunta.appendChild(input);
                    
                });
            });  
        });

    } catch (error) {
        console.error('Erro:', error.message);
    }
}
getForm()
