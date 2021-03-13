let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x = $(".precio");
  x.click(presionprecio)
  x = $(".precio");
  x.click(presionprecio)
}

function presionprecio() {
  let x = $(".precio");
  x.css("color", "#ff0000");
  x.css("background-color", "#ffff00");
  x.css("font-family", "Courier");
}
