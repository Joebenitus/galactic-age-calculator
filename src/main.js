import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import User from './js/calculator.js';

$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();
    let inputtedAge = $("#input-age").val();
    let inputtedExpectancy = $("#input-expectancy").val();
    let user = new User(inputtedAge, inputtedExpectancy);
    $(".info-screen").show();

    $("#age-on-mercury").text(`Age on Mercury: ${user.mercuryAge()} Mercurian years.`);
    $("#years-left-mercury").text(user.mercuryYearsLeft());

    $("#age-on-venus").text(`Age on Venus: ${user.venusAge()} Venusian years.`);
    $("#years-left-venus").text(user.venusYearsLeft());

    $("#age-on-mars").text(`Age on Mars: ${user.marsAge()} Martian years.`);
    $("#years-left-mars").text(user.marsYearsLeft());

    $("#age-on-jupiter").text(`Age on Jupiter: ${user.jupiterAge()} Jovian years.`);
    $("#years-left-jupiter").text(user.jupiterYearsLeft());

    $("#age-on-saturn").text(`Age on Saturn: ${user.saturnAge()} Saturnian years.`);
    $("#years-left-saturn").text(user.saturnYearsLeft());
    
    $("#age-on-uranus").text(`Age on Uranus: ${user.uranusAge()} Uranian years.`);
    $("#years-left-uranus").text(user.uranusYearsLeft());

    $("#age-on-neptune").text(`Age on Neptune: ${user.neptuneAge()} Neptunian years.`);
    $("#years-left-neptune").text(user.neptuneYearsLeft());

    $("#age-on-pluto").text(`Age on Pluto: ${user.plutoAge()} Plutonian years.`);
    $("#years-left-pluto").text(user.plutoYearsLeft());
  });
});