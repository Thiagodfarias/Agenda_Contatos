const formulario = document.querySelector('#formulario-contato');
const tabelaContatos = document.querySelector('#tabela-contatos');
const listaContatos = [];

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const nome = formulario.nome.value.trim();
    const telefone = formulario.telefone.value.trim();
    
    if (nome === '' || telefone === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    if (listaContatos.some(contato => contato.nome === nome || contato.telefone === telefone)) {
        alert('Esse nome ou telefone já foi utilizado!');
        return;
    }
    
    const contato = { nome, telefone };
    listaContatos.push(contato);
    adicionarContatoTabela(contato);
    
    formulario.reset();
});

function adicionarContatoTabela(contato) {
    const linha = document.createElement('tr');
    linha.innerHTML = `
        <td>${contato.nome}</td>
        <td>${contato.telefone}</td>
    `;
    tabelaContatos.appendChild(linha);
}
