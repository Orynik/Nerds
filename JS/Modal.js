"use scrict";
//Модальное окно
// Проверка, является ли браузер IE
let ChechedBrowser = function(){
    if(navigator.userAgent.search(/Trident/) > 0){
        return 2;
    }
    return 1;
}

let modal_call = document.querySelector(".modal-call");
let close_modal = document.querySelector(".close-cross");
let modal_window = document.querySelector(".modal-window");
let blur = document.querySelector(".blur");
//Вызов окна
modal_call.onclick = function(){
    modal_window.style.transition = "all 1s ease";
    document.body.style.overflow = "hidden";
    blur.style.transition = "all 1s ease";
    if(ChechedBrowser = 2){
        blur.style.opacity = "0.2";
    }else{
        blur.style.filter = "blur(3px)";
    }
    modal_window.style.top = "0";
}

close_modal.onclick = function(){
    modal_window.style.top = "2600px";
    if(ChechedBrowser = 2){
        blur.style.opacity = "1";
    }else{
        blur.style.filter = "";
    }
    document.body.style.overflow = "scroll";
    modal_window.style.transition = "all 2s ease";
}

