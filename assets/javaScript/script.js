$(document).ready(function () {
  $("#carousel-imagens").slick({
    autoplay: true,
  });
  $(".menu-hamburguer").click(function () {
    $("nav").slideToggle();
  });
  $("#telefone").mask("(00) 00000-0000");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      mensagem: {
        required: true,
      },
      veiculoDeInterese: {
        required: false,
      },
    },
    messages: {
      nome: "Por favor, insira o seu nome Completo",
      email: "Por favor, insira o seu melhor e-mail",
      telefone: "Insira seu telefone",
      mensagem: "Campo Obrigatótio",
    },
    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incoretos`);
      }
    },
  });
  $(".lista-veiculos button").click(function () {
    const DESTINO = $("#contato");
    const NOMEVEICULO = $(this).parent().find("h3").text();

    $("#veiculo-interesse").val(NOMEVEICULO);
    $("html").animate(
      {
        scrollTop: DESTINO.offset().top,
      },
      1000
    );

    $("seletor").get(0).scrollIntoView({ behavior: "smooth" });
  });
});
