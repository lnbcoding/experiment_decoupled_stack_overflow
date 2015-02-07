$(document).ready(function() {

    // Get All Question using Ajax and rendering Client Side
    $.ajax({
        url: 'http://localhost:3000/questions',
        type: 'GET',
    }).done(function(serverResponse) {
        // iterate over the array of Objects and display the title and content
        for (var i = 0; i < serverResponse.length; i ++) {
            $("table.each-question-index").append('<tr><td>' + serverResponse[i].title + '</td> <td> ' + serverResponse[i].content + ' </td></tr>');
        }
    });

    // Get One Question using Ajax and rendering Client Side
    $.ajax({
        url: 'http://localhost:3000/questions',
        type: 'GET',
    }).done(function(serverResponse) {
        $("table.one-question").append('<tr><td>' + serverResponse.title + '</td> <td> ' + serverResponse.content + ' </td></tr>');
    });

});
