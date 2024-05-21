const url = "https://apiformulariojava.azurewebsites.net/formulario";

/*const url = fetch("https://apiformulariojava.azurewebsites.net/formulario")
console.log(url)*/

//pegando as tags do HTML
//const FormCabecalho = document.querySelector(".CardCabecalho");
const FormCardPergunta = document.querySelector("#container");

async function getForm(){
    try{
        const response = await fetch(url);
        console.log(response);
    
        const data = await response.json();
        console.log(data)
    
        let perguntaContador = 1;
        data.forEach((formulario)=>{
            //trabalhando com a descrição do formulário
            const divform = document.createElement("div");
            const descricaoFormulario = document.createElement("p");

            descricaoFormulario.innerHTML = formulario.descricao;

            divform.setAttribute("class","FormCabecalho");

            //divform.appendChild(descricaoFormulario);
            //FormCabecalho.appendChild(divform);

            //trabalhando com as perguntas 
            const startIndex = 13;
            const endIndex = 16;
            formulario.perguntasEntities.slice(startIndex, endIndex).forEach((pergunta) => {
            
                const CardDivPergunta = document.createElement('div');
                const FormCardPergunta = document.createElement('div');
                const perguntaElemento = document.createElement('p');

                CardDivPergunta.setAttribute("class", "CardDiv");
                FormCardPergunta.setAttribute("class", "FormCardPergunta");
                       
                perguntaElemento.innerHTML = pergunta.descricao;

                FormCardPergunta.appendChild(perguntaElemento);
                CardDivPergunta.appendChild(FormCardPergunta);

                container.appendChild(FormCardPergunta);

                //trabalhando com as alternativas
                pergunta.alternativaEntities.forEach((alternativas)=>{
                    const radioName = `pergunta_${perguntaContador}`;

                    const alternativaContainer = document.createElement('div');
                    const respostaElemento = document.createElement('input');

                    respostaElemento.setAttribute("type","radio");
                    respostaElemento.setAttribute("name", radioName); 
                    respostaElemento.setAttribute("value", alternativas.descricao);

                    const label = document.createElement('label');
                    label.textContent = alternativas.descricao;

                    alternativaContainer.appendChild(respostaElemento);
                    alternativaContainer.appendChild(label);

                    FormCardPergunta.appendChild(alternativaContainer);

                });
                perguntaContador++;
            });  
        });

    } catch (error) {
        console.error('Erro:', error.message);
    }
}
getForm()
