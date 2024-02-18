$(document).ready(function(){

    //Evento de submit
    $('form').on('submit',function(e){
        e.preventDefault(); //Não limpar automaticamente para antes recuperar informação

        //Recuperando informação input type nome.
        const nomeTarefa = $('#nome-tarefa').val();
        
        //Construindo código dinâmico
            //constante novoItem recebe código li.
            const novoItem = $('<li></li>');
            //entre os li vamos adicionar o valor do nomeTarefa.
            //a insersão só funciona se tiver entre tags html
            $(`<p>${nomeTarefa}</p>`).appendTo(novoItem);

        //adicionando código dinâmico no ul do HTML
        $(novoItem).appendTo('ul')
        console.log(novoItem);

        //limpando formulário depois de adicionar
        $('#nome-tarefa').val("");

        $('#minhaLista li').click(function(){
            $(this).toggleClass('tacharItens');
        });
    })

})