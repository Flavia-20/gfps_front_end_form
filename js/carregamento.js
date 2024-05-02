// Simulação de progresso de carregamento
    let progresso = 0;
    const barraDeProgresso = document.getElementById('progress');

    function simularCarregamento() {
        const intervalo = setInterval(() => {
            progresso += 25;
            if (progresso >= 100) {
                progresso = 100;
                clearInterval(intervalo); 
                window.location.href = '../html/form.html';
            }
            atualizarBarraDeProgresso(progresso);
        }, 1000);
    }

    /*
    function simularCarregamento() {
        setInterval(() => {
            progresso += 25;
            if (progresso > 100) {
                progresso = 100;
                clearInterval();
            }
            atualizarBarraDeProgresso(progresso);
        }, 1000);
    }*/

    function atualizarBarraDeProgresso(progresso) {
        barraDeProgresso.style.width = progresso + '%';
    }

    window.onload = function() {
        simularCarregamento();
    };