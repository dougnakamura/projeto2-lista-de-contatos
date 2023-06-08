function adicionarContato(event) {
    event.preventDefault();
    
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    
    var tabela = document.getElementById("tabelaContatos");
    var linha = tabela.insertRow();
    
    var celulaNome = linha.insertCell(0);
    celulaNome.innerHTML = nome;
    
    var celulaTelefone = linha.insertCell(1);
    celulaTelefone.innerHTML = telefone;
    
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
}