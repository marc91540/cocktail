
     
    $(function () {

    $('#cocktail').click(function () {
        $.get('/api/cocktail', function (data) {
            for (var i = 0; i < data.length; i++) {
                var _li = '<li>' + data[i].nomCocktail + '</li>';
                $('#cocktaillist').append(_li);
            }
        });
    });

});