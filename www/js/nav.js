function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$('#mySidenav a').click(function () {
    $('.spa').css('display', 'none');
    $('#' + $(this).data('show')).show();


});
