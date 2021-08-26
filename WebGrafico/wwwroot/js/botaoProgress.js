var btnProgress = new Object();
btnProgress.porcentagem = 0;

btnProgress.IniciaPorcentagem = function () {

    if (btnProgress.porcentagem > 100)
        btnProgress.porcentagem = 0;
    else {
        setTimeout(btnProgress.IniciaPorcentagem, 300);
    }

    $("#porcentagem-upload").css("width", btnProgress.porcentagem + "%");

    btnProgress.porcentagem += 10;

}


$(function () {

    $("#bth-upload").click(function () {
        btnProgress.IniciaPorcentagem();
    })

})