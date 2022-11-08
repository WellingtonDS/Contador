$('textarea').on('keyup paste', function(){
    setTimeout(function(){
    let valorTextarea = $('textarea').val().length,
    palavras = $('textarea').val().split(' ').length;
    $('.caracteres').text(valorTextarea);
    $('.palavras').text(palavras);
}, 200);
})