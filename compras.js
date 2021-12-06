var quantElementos = prompt('Informe quantos itens serão inseridos.')
var listaItens = []
function listaCompleta(listaItens) {
  for (i = 0; i < quantElementos; i++) {
    var item = prompt('Informe o item')
    if (item.length % 2) {
      listaItens.push(' ' + item)
    } else {
      alert('Item inválido!')
      i--
    }
  }
  document.write(listaItens)
}
listaCompleta(listaItens)
