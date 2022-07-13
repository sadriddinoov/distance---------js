var elForm = document.querySelector("#formDistance");
var elInput = document.querySelector("#userDistance");
var elBtn = document.querySelector("#distanceBtn");
var elText1 = document.querySelector("#time1");
var elText2 = document.querySelector("#time2");
var elText3 = document.querySelector("#time3");
var elText4 = document.querySelector("#time4");

var walkspeed = 3.6;
var bikespeed = 20.1;
var carspeed = 70;
var planespeed = 800;



elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();


    var inputvalue = elInput.value;

    elText1.textContent = `${Math.floor(inputvalue/walkspeed)}h ${Math.floor(((inputvalue/walkspeed).toFixed(2)-Math.floor((inputvalue/walkspeed)))*60)} min`

    elText2.textContent = `${Math.floor(inputvalue/bikespeed)}h ${Math.floor(((inputvalue/bikespeed).toFixed(2)-Math.floor((inputvalue/bikespeed)))*60)} min`

    elText3.textContent = `${Math.floor(inputvalue/carspeed)}h ${Math.floor(((inputvalue/carspeed).toFixed(2)-Math.floor((inputvalue/carspeed)))*60)} min`

    elText4.textContent = `${Math.floor(inputvalue/planespeed)}h ${Math.floor(((inputvalue/planespeed).toFixed(2)-Math.floor((inputvalue/planespeed)))*60)} min`
})