$(document).ready(function(){
    $('form').on('submit', function(e){        
        e.preventDefault();

        const inputTarefa = $('#tarefa').val();
        const criarTarefa = $('<li><input type="checkbox"></li>').text(inputTarefa);
        $('ul').append(criarTarefa);
        $('#tarefa').val('');

        criarTarefa.on('click', function(){
            $(this).toggleClass('tarefaConcluida');
        })
    })
    
})