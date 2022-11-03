// Your code goes here!
import {modulo,percentage,percentageOf,difference} from "./percentage.js"

import {calculateAspectRatio} from "./aspect-ratio.js"


//Number weil inputfelder sind immer string
//MODULO
const moduloForm = document.getElementById("modulo-form");
moduloForm.addEventListener("change", (e) => {
  const result = document.getElementById("modulo_result");
  const input = [document.getElementById("modulo_1"),document.getElementById("modulo_2")];
  result.value = modulo(Number(input[0].value), Number(input[1].value));
});

//Percentage 
const percentageForm = document.getElementById("percentage-form");
percentageForm.addEventListener("change", (e) => {
  const result = document.getElementById("percentage_result");
  const input1 = document.getElementById("percentage_1");
  const input2 = document.getElementById("percentage_2");
  result.value = percentage(Number(input1.value), Number(input2.value));
});

//PercentageOf
const percentageOfForm = document.getElementById("percentageOf-form");
percentageOfForm.addEventListener("change", (e) => {
  const result = document.getElementById("percentageOf_result");
  const input1 = document.getElementById("percentageOf_1");
  const input2 = document.getElementById("percentageOf_2");
  result.value = percentageOf(Number(input1.value), Number(input2.value));
});
//percentage Difference
const differenceForm = document.getElementById("difference-form");
differenceForm.addEventListener("change", (e) => {
  const result = document.getElementById("difference_result");
  const input1 = document.getElementById("difference_1");
  const input2 = document.getElementById("difference_2");
  result.value = difference(Number(input1.value), Number(input2.value));
});

//Aspect Ratio
const aspectForm = document.getElementById("aspect-form");
aspectForm.addEventListener("change", (e) => {
    const input = [document.getElementById("ratio_1"),
    document.getElementById("ratio_2")];
    const newWidth = document.getElementById("ratio_result-width");
    const newHeight = document.getElementById("ratio_result-height");
    if (e.target.id === "ratio_result-height"){
        newWidth.value =calculateAspectRatio(Number(input[0].value), Number(input[1].value),newHeight.value, "h")
    }
    if (e.target.id === "ratio_result-width"){
        newHeight.value =calculateAspectRatio(Number(input[0].value), Number(input[1].value),newWidth.value, "w")
    }

})
