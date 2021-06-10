$(function(){
    document.addEventListener("deviceready", onDeviceReady, false);

    $('#renew').click(function(){
        Nieuws.init();
    });
});

function onDeviceReady() {
    console.log('Device is ready');
    Nieuws.init();
}
