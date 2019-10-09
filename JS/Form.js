"use strict";
function change() {
    let range = document.getElementById("range");
    let max = document.getElementById("max-range");

    max.value = range.value;
};

function changeMax(){
    let range = document.getElementById("range");
    let max = document.getElementById("max-range");

    range.value = max.value;
}