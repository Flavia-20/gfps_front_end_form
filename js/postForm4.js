const postUrl = "https://apiformulariojava.azurewebsites.net/resposta";

//const butao = document.getElementById('enviar');

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
                    resposta = JSON.stringify(resposta);
                
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

   else{
    const container = document.getElementById('question');
    const textArea = container.querySelectorAll('textarea');
    let perguntaContador = 17;

    listaRespostas = [];
    
        if (textArea.value) {
            let resposta = {
                idPergunta: perguntaContador,
                idAlternativa: input.getAttribute('data-id'),
                respostaDissertativa: textArea.value,
            };
            console.log(resposta);
            resposta = JSON.stringify(resposta);
            listaRespostas.push(resposta);    
            perguntaContador++;
        }
    } 
       
postResposta(listaRespostas); 
}
