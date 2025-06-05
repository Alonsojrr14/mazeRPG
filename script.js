function pegarChave() {
    localStorage.setItem('temChave', 'true');
    alert('Você pegou a chave!');
    const botao = document.getElementById('btnPegarChave');
    if (botao) {
        botao.disabled = true;
        botao.innerText = 'Chave já obtida';
    }
}

function verificarChave() {
    if (localStorage.getItem('temChave') === 'true') {
        document.getElementById('conteudo').style.display = 'block';
    } else {
        alert('Você precisa da chave para entrar aqui.');
        window.location.href = 'sala4.html';
    }
}

function reiniciar() {
    localStorage.removeItem('temChave');
    window.location.href = 'index.html';
}

function mostrarIndicadorChave() {
    let indicador = document.getElementById('indicador-chave');
    if (!indicador) {
        indicador = document.createElement('div');
        indicador.id = 'indicador-chave';
        indicador.style.position = 'fixed';
        indicador.style.top = '10px';
        indicador.style.left = '10px';
        indicador.style.background = '#333';
        indicador.style.color = '#ffa';
        indicador.style.padding = '0.5em 1em';
        indicador.style.borderRadius = '6px';
        indicador.style.boxShadow = '0 0 6px #fa0';
        indicador.style.zIndex = '1000';
        document.body.appendChild(indicador);
    }
    if (localStorage.getItem('temChave') === 'true') {
        indicador.innerText = '🔑 Você tem a chave!';
        indicador.style.display = 'block';
    } else {
        indicador.innerText = '';
        indicador.style.display = 'none';
    }
}

function atualizarBotaoBau() {
    const botao = document.getElementById('btnPegarChave');
    if (botao) {
        if (localStorage.getItem('temChave') === 'true') {
            botao.disabled = true;
            botao.innerText = '🧰 Baú aberto';
        } else {
            botao.disabled = false;
            botao.innerText = '🧰 Abrir';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    mostrarIndicadorChave();
    atualizarBotaoBau();
});
