"use strict";
//Карусель
// Передача основного класса основного окна и создание шаблона для расчета
let slider = document.querySelector(".slider");
let width_slide = 0;
//Устанока задерожки слайд-шоу
let slideInterval = setInterval(slideshow,5500);

//Передача radio-кнопок слайдов
let radio_slide1 = document.getElementById("slide-1-radio");
let radio_slide2 = document.getElementById("slide-2-radio");
let radio_slide3 = document.getElementById("slide-3-radio");

//Функция, высчитывающая позицию слайдов
function slideshow(){
    width_slide += 1200;

    if(width_slide > 2400){
        width_slide = 0;
        clearSelect();
        radio_slide1.classList.add("select");
    }

    slider.style.transform = "translate3d(-"+width_slide +"px,0px,0px)";
    if(width_slide == 2400){
        clearSelect();
        radio_slide3.classList.add("select");
    }else if(width_slide == 1200){
        clearSelect();
        radio_slide2.classList.add("select");
    }
}

function clearSelect(){
    radio_slide1.classList.remove("select");
    radio_slide2.classList.remove("select");
    radio_slide3.classList.remove("select");
}


//Модальное окно

let modal_call = document.querySelector(".modal-call");
let close_modal = document.querySelector(".close-cross");
let modal_window = document.querySelector(".modal-window");
let blur = document.querySelector(".blur");
//Вызов окна
modal_call.onclick = () =>{
    modal_window.style.transition = "all 1s ease";
    document.body.style.overflow = "hidden";
    blur.style.transition = "all 1s ease";
    blur.style.filter = "blur(3px)"
    modal_window.style.top = "0";
}

close_modal.onclick = () =>{
    modal_window.style.top = "2600px";
    blur.style.filter = "";
    document.body.style.overflow = "scroll";
    modal_window.style.transition = "all 2s ease";
}
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
            iconImageHref: 'https://raw.githubusercontent.com/Orynik/Nerds/APIMaps/img/index_products/map-marker.png',
            iconImageSize: [367, 190],
            iconImageOffset: [-190, -185] });     
    myMap.geoObjects.add(myPlacemark);
}