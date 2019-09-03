"use strict";
//Map

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init(){     

    // Создание карты 
    var myMap = new ymaps.Map("map", {
        center: [59.938631, 30.323055],
        zoom: 17,
        controls: [] //Удаление всех вспомогательных элементов
    });

    myMap.behaviors.disable('scrollZoom'); //Отключение зума колесиком мышки
    // Добавление полоски Zoom
    myMap.controls.add("zoomControl", {
        position: {top: 15, left: 15}
    });
    //Добавление собственной марки на карту
    var myPlacemark = new ymaps.Placemark([59.938631, 30.323055] , {},
        {   iconLayout: 'default#image',
            iconImageHref: 'https://raw.githubusercontent.com/Orynik/Nerds/master/img/index_products/map-marker.png',
            iconImageSize: [367, 190],
            iconImageOffset: [-190, -185] });     
    myMap.geoObjects.add(myPlacemark);
}