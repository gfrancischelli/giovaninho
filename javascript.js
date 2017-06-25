// TA VENO O NOME DA FORM AQUI
document.forms.nomeDaForm.addEventListener("submit", function(e) {
  e.preventDefault();
  console.log(e.target);

  // "this" no caso é o formulário onde colocamos o event listener
  // nomeDoInput é a propriedade "name" do input lá
  var input = this.nomeDoInput;

  var xhr = new XMLHttpRequest();
  var http = "https://images-api.nasa.gov/search?q=";

  xhr.open("GET", http + input.value.toLowerCase(), true);

  // Executa a chamada. Usa os event listener pra acompanhar o status
  // "load" quando a chamada for completa
  // também tem "progress", "error", "abort"
  xhr.send();

  // Recebe a mensagem do XHR e lida com ela
  function handleResponse(response) {
    console.log(response.target.response);
  }

  // Registra esse callback pra quando o xhr responder
  xhr.addEventListener("load", handleResponse, false);

  // Um link bom pra ler
  // https://davidwalsh.name/xmlhttprequest
});
