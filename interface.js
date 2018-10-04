$(document).ready(function() {
  var thermostat = new Thermostat()
  $('.temperature').text(thermostat.temperature);

  $(".up-button").click(function() {
    thermostat.up()
    $('.temperature').text(thermostat.temperature);
  });

   $(".down-button").click(function() {
     thermostat.down()
     $('.temperature').text(thermostat.temperature);
   });

   $(".PSM-ON").click(function() {
     thermostat.turnPowerSavingModeOn();
   });

   $(".PSM-OFF").click(function() {
     thermostat.turnPowerSavingModeOff();
   });

   $(".reset").click(function() {
     thermostat.resetTemp()
     $('.temperature').text(thermostat.temperature);
   });

   $(".energy-usage").click(function() {
     $('.energy-display').text(thermostat.getCurrentEnergyUsage());
     if(thermostat.getCurrentEnergyUsage() === "Low") {
       $('.energy-display').css('color', 'green')
     } else if(thermostat.getCurrentEnergyUsage() === "High") {

       $('.energy-display').css('color', 'red')
     } else {

       $('.energy-display').css('color', 'black')
     }

   });

});
