require([

    'demo/mymodule',
    'dojo/fx',
    'dojo/domReady!'

], function (Ganesh, fx) {
    
    Ganesh.setText('greeting', 'Hello Dojo!');

    fx.slideTo({
        node: greeting,
        top: 100,
        left: 200
    }).play();

});