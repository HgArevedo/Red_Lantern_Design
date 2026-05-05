const formulario = document.getElementById('form-contato');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

formulario.addEventListener('submit', function(enviado) {
    
   
    enviado.preventDefault();

    formulario.style.display = 'none';

    mensagemSucesso.style.display = 'block';

});

