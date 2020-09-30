$(document).ready(function() {

    // Início do consumo da API do IBGE
    // $.ajax({
    //     dataType: 'JSON',
    //     type: 'GET',
    //     assync: true,
    //     url: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/35/distritos',
    //     success: function(dados) {
    //         for (var i = 0; i < dados.length; i++) {
    //             $('#cidade').append(`<option value="${dados[i].id}">${dados[i].nome}</option>`)
    //         }
    //     }
    // })

    $('#cidade').keyup(function() {

        var nome = $(this).val()

        $.ajax({
            dataType: 'JSON',
            type: 'GET',
            assync: true,
            url: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/35/distritos',
            success: function(dados) {
                for (var i = 0; i < dados.length; i++) {
                    if (dados[i].nome == nome) {
                        console.log(dados[i].nome)
                        $('#cidade').after(`<p>${dados[i].nome}</p>`)
                    }
                }
            }
        })
    })

    // Selecionar o elemento HTML que eu desejo monitorar, neste caso é o botão
    $('.btn-success').click(function(e) {

        // e = abreviação de event = evento
        e.preventDefault()

        var dados = $('#form-cad').serialize()

        console.log(dados)

    })

})