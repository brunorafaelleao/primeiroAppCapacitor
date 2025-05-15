// Função que será chamada quando o botão "Adicionar" for clicado
function adicionarItem() {
  // Obtém o elemento de input onde o usuário digita o item
  const input = document.getElementById("itemInput");

  // Pega o valor digitado e remove espaços extras nas pontas
  const texto = input.value.trim();

  // Verifica se o texto não está vazio
  if (texto !== "") {
    // Cria um novo elemento de lista (li)
    const li = document.createElement("li");

    // Define o texto do novo item com o valor digitado
    li.textContent = texto;

    // Adiciona o item criado dentro da lista (ul com id "lista")
    document.getElementById("lista").appendChild(li);

    // Limpa o campo de input para o próximo item
    input.value = "";
  }
}
