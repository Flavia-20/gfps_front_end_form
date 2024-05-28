async function postResposta(listaRespostas) {
    try {

        let data = {
            respostaUsuarios: listaRespostas
        };

        const response = await fetch("https://apiformulariojava.azurewebsites.net/resposta", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        //await response.json();
        console.log(response);
        
      //  window.location.href = '../html/form3.html';


    } catch (error) {
        console.error('Erro ao postar a resposta:', error.message);
    }
}

const butao = document.getElementById('enviar');

function verificarInputs() {

    const container = document.getElementById('container');

        //Seleciona todos os inputs do formulário
        const inputs = container.querySelectorAll('input');
        let perguntaContador = 5;

        listaRespostas = [];

        inputs.forEach(input => {
        
            if (input.type === 'text') {
                if (input.value) {
                    let resposta = {
                        perguntaId: perguntaContador,
                        idAlternativa: [parseInt(input.getAttribute('data-id'))],
                        respostaDissertativa: input.value,
                    };
                
                    listaRespostas.push(resposta);    
                    perguntaContador++;
                }
            } else if (input.type === 'checkbox') {
                if (input.checked) {
                    let resposta = {
                        idPergunta: perguntaContador,
                        idAlternativa: [parseInt(input.getAttribute('data-id'))],
                        respostaDissertativa: null,
                       // inputValue: input.value,
                    };

                    console.log(resposta);
                    perguntaContador++;
                }
            } else if (input.type === 'radio') {   
                    if (input.checked) {
                        let resposta = {
                            idPergunta: perguntaContador,
                            idAlternativa: [parseInt(input.getAttribute('data-id'))],
                            respostaDissertativa: null,
                            //inputValue: input.value,
                        };
                        //console.log(resposta);
        
                        listaRespostas.push(resposta);
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

