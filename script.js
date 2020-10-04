function adicionar() {
  var li = document.createElement("li");
  var inputV = document.getElementById("entrada").value;
  var t = document.createTextNode(inputV);
  li.appendChild(t);
  if (inputV == "") {
    alert("Não digitou nada pq ???");
  } else {
    document.getElementById("lista").appendChild(li);
  }
  document.getElementById("entrada").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("        remove");
  span.className = "fechar";
  span.appendChild(txt);
  li.appendChild(span);

  var fechar = document.getElementsByClassName("fechar");
  for (var i = 0; i < fechar.length; i++) {
    fechar[i].onclick = function () {
      var div = this.parentElement;
      div.remove();
    };
  }
}
