let sliders = document.querySelectorAll('.heightRange');
let inputs = document.querySelectorAll('.heightText');

const heightRef = document.querySelector('.shapeImg').height;

console.log(heightRef);

sliders.forEach(slider => {
    slider.addEventListener('change', ()=>{
        
        let shapeImg = slider.parentElement.parentElement.querySelector('.shapeImg');
        let heightText = slider.parentElement.querySelector('.heightText');

        heightText.value = slider.value;

        let height = (slider.value * 100 / slider.max) * heightRef / 100;
        shapeImg.style.height = height + "px";

    });
});

inputs.forEach(input => {
    input.addEventListener('change', ()=>{

        let shapeImg = input.parentElement.parentElement.querySelector('.shapeImg');
        let slider = input.parentElement.querySelector('.heightRange');

        slider.value = input.value;

        let height = (input.value * 100 / input.max) * heightRef / 100;
        shapeImg.style.height = height + "px";

    });
});