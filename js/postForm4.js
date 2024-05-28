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

        console.log(await response.json());

        //  window.location.href = '../html/form3.html';


    } catch (error) {
        console.error('Erro ao postar a resposta:', error.message);
    }
}

//const butao = document.getElementById('enviar');

/*function verificarInputs() {

    const container = document.getElementById('question');

        //Seleciona todos os inputs do formulário
        const textArea = container.querySelectorAll('textarea');
        let perguntaContador = 16;

        listaRespostas = [];
        
                if (textArea.value) {
              
                    let resposta = {
                        perguntaId: perguntaContador,
                        //inputId: input.getAttribute('data-id'),
                        inputValue: input.value,
                    };
                    console.log(resposta);
                
                    listaRespostas.push(resposta);    
                    perguntaContador++;
                }
            } 
           
    postResposta(listaRespostas); */

/*butao.addEventListener('click', (e) => {
    e.preventDefault();
    verificarInputs();
});*/

function submitForm() {
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    const entries = Array.from(formData.entries());

    if (entries.length < 1 || entries[0][1].trim() === '') {
        alert('Por favor, responda a pergunta.');
        return;
    }
    /*let results = '';
    entries.forEach(([question, answer], index) => {
        results += `Pergunta ${index + 1}: ${answer}\n`;
    });
    alert(results);*/

    else {

        var respostaDoUsuario = entries[0][1]


        let perguntaContador = 17;

        listaRespostas = [];

        let resposta = {
            idPergunta: perguntaContador,
            idAlternativa: [16],
            respostaDissertativa: respostaDoUsuario,
        };

        listaRespostas.push(resposta);
        perguntaContador++;

    }

    postResposta(listaRespostas);
}
