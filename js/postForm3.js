const postUrl = "https://apiformulariojava.azurewebsites.net/resposta";

const butao = document.getElementById('enviar');

async function postResposta(listaRespostas) {
    try {
        const response = await fetch(postUrl, {
            method: "POST",
            body: listaRespostas,
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log(data);
      //  window.location.href = '../html/form3.html';
    
    } catch (error) {
        console.error('Erro ao postar a resposta:', error.message);
    }
}

function verificarInputs() {

    const container = document.getElementById('container');

        //Seleciona todos os inputs do formulário
        const inputs = container.querySelectorAll('input');
        let perguntaContador = 12;

        listaRespostas = [];

        inputs.forEach(input => {
        
            if (input.type === 'text') {
                if (input.value) {
              
                    let resposta = {
                        perguntaId: perguntaContador,
                        inputId: input.getAttribute('data-id'),
                        inputValue: input.value,
                    };
                    console.log(resposta);
                    resposta = JSON.stringify(resposta);
                
                    listaRespostas.push(resposta);    
                    perguntaContador++;
                }
            } else if (input.type === 'checkbox') {
                if (input.checked) {
                    let resposta = {
                        idPergunta: perguntaContador,
                        idAlternativa: input.getAttribute('data-id'),
                        respostaDissertativa: null,
                        //inputValue: input.value,
                    };
                    console.log(resposta);
                    resposta = JSON.stringify(resposta);     
                    perguntaContador++;
                }
            } else if (input.type === 'radio') {   
                    if (input.checked) {
                        let resposta = {
                            idPergunta: perguntaContador,
                            idAlternativa: input.getAttribute('data-id'),
                            respostaDissertativa: null,
                            //inputValue: input.value,
                        };
                        //console.log(resposta);
                        resposta = JSON.stringify(resposta);
                        listaRespostas.push(resposta);   
                        console.log(listaRespostas); 
                        perguntaContador++;
            }
        }   
    });
    postResposta(listaRespostas); 
};

butao.addEventListener('click', (e) => {
    e.preventDefault();
    verificarInputs();
});

