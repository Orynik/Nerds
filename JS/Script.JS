"use strict";

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
