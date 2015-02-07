$(document).ready(function() {

    $.ajax({
        url: 'http://localhost:3000/questions',
        type: 'GET',
        dataType: 'JSON'
    }).done(function(serverResponse) {
        for (var i = 0; i < serverResponse.length; i ++) {
            $("table").append('<tr><td>' + serverResponse[i].title + '</td> <td> ' + serverResponse[i].content + ' </td></tr>');
        }
    });

    $.ajax({
        url: 'http://localhost:3000/questions',
        type: 'GET',
        dataType: 'JSON'
    }).done(function(serverResponse) {
        for (var i = 0; i < serverResponse.length; i ++) {
            $("table").append('<tr><td>' + serverResponse[i].title + '</td> <td> ' + serverResponse[i].content + ' </td></tr>');
        }
    });

});
