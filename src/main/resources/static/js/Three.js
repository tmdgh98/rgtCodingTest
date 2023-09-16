window.addEventListener('DOMContentLoaded', init);

function init() {
    getLast();
}

function getLast() {
    $.ajax({
        type    : "GET",
        url     : "http://211.44.24.167:9002/codingTest/getLast.php?callback=?",
        dataType: 'jsonp',
        //contentType: 'application/json; charset=UTF-8',
        error     : function (xhr, status, error) {
            console.log(error);
        },
        success   : function (data) {
            //result = JSON.parse(data);
            console.log(data);
        },
        beforeSend: function (xhr, settings) {
        },
        complete  : function (xhr, status) {
        }
    })

    return false;
}

function callback(data) {
    // data 객체 받아 옴
}