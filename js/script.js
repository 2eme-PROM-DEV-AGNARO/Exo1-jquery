$('#egale').on('click', function(){
    var nombre1 = parseInt($('#nombre1').val());
    var nombre2 = parseInt($('#nombre2').val());
    var operateur = $('#operateur').val();
    if(nombre1=='' || nombre2=='')
    {
        $('#resultat').html('Veillez remplir les champs vide.');
    }
    else
    {
        switch (operateur)
        {
            case 'vide':
                $('#resultat').html('Choisissez votre opérateur.');
            break;
            case '+':
                $('#resultat').html(nombre1+nombre2);
            break;
            case '-':
                $('#resultat').html(nombre1-nombre2);
            break;
            case '*':
                $('#resultat').html(nombre1*nombre2);
            break;
            case '/':
                $('#resultat').html(nombre1/nombre2);
            break;
            default:
                $('#resultat').html(nombre1%nombre2);
            break;
        }
    }
});