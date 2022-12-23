var elForm = document.querySelector(".timecalc__form");
var elDistance = document.querySelector(".timecalc__input");
var elWalkingTime = document.querySelector(".timecalc__items-totaltime--walk");
var elBikeTime = document.querySelector(".timecalc__items-totaltime--bike");
var elCarTime = document.querySelector(".timecalc__items-totaltime--car");
var elPlaneTime = document.querySelector(".timecalc__items-totaltime--plane");

elForm.addEventListener("submit", function(evt){
    evt.preventDefault()
    
    var walkingSpeed = 3.6;
    elWalkingTime.textContent = Math.round(elDistance.value / walkingSpeed) + " hours";

    var bikeSpeed = 20.1;
    elBikeTime.textContent = Math.round(elDistance.value / bikeSpeed) + " hours";

    var carSpeed = 70;
    elCarTime.textContent = Math.round(elDistance.value / carSpeed) + " hours";

    var planeSpeed = 800;
    elPlaneTime.textContent = Math.ceil(elDistance.value / planeSpeed) + " hours";
});