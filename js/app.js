let sliders = document.querySelectorAll('.heightRange');
let inputs = document.querySelectorAll('.heightText');

const heightRef = document.querySelector('.shapeImg').height;

let nbrChange = (input) => {

    let value = input.value;

    let items = document.querySelectorAll('.item');

    if(value == items.length) {

        return;

    } else if(value > items.length) {

        items[items.length - 1].parentElement.appendChild(items[items.length - 1].cloneNode(true));
        nbrChange(input);

    } else if(value < items.length) {
        
        items[items.length - 1].parentElement.removeChild(items[items.length - 1]);
        nbrChange(input);
    }
}

let rangeChange = (slider) => {

    let shapeImg = slider.parentElement.parentElement.querySelector('.shapeImg');
    let heightText = slider.parentElement.querySelector('.heightText');

    heightText.value = slider.value;

    let height = (slider.value * 100 / slider.max) * heightRef / 100;
    shapeImg.style.height = height + "px";

}

let textChange = (input) => {

    let shapeImg = input.parentElement.parentElement.querySelector('.shapeImg');
    let slider = input.parentElement.querySelector('.heightRange');

    slider.value = input.value;

    let height = (input.value * 100 / input.max) * heightRef / 100;
    shapeImg.style.height = height + "px";

}