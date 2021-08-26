var objetoGrafico = new Object();
objetoGrafico.valorporcentagem = 35;

objetoGrafico.Adicionar = function () {
    if (objetoGrafico.valorporcentagem < 100) {
        objetoGrafico.valorporcentagem += 5;
    }

    objetoGrafico.AtualizaGrafico();
}

objetoGrafico.Remover = function () {
    if (objetoGrafico.valorporcentagem > 0) {
        objetoGrafico.valorporcentagem -= 5;
    }

    objetoGrafico.AtualizaGrafico();
}


objetoGrafico.AdicionarBotao = function () {
    $("#Adicionar").click(
        function () {
            objetoGrafico.Adicionar();
        });

    $("#Remover").click(
        function () {
            objetoGrafico.Remover();
        });
}

objetoGrafico.AtualizaGrafico = function () {
    var valor = objetoGrafico.valorporcentagem + "%";
    $(".pontuacao").css("width", valor);
    $(".pontuacao").css("height", valor);
    $("#porcentagemP").text(valor);
    $("#porcentagemSpan").text(valor);
}


$(function () {
    objetoGrafico.AtualizaGrafico();
    objetoGrafico.AdicionarBotao();
})