'use strict';

describe ('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe ('Temperature initialization', function() {

    it('starts with a temperature of 20 degrees', function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('has a minimimum temperature of 10 degrees', function() {
      for (var i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });

  });

  describe ('Temperature change', function() {

    it('increases the temperature', function() {
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    it('lowers the temperature', function() {
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });

  });

  describe ('Power saving mode', function() {

    it('has power saving mode on by default', function() {
      expect(thermostat.isPowerSavingModeon()).toBe(true);
    });

    it('can turn off power saving mode', function() {
      thermostat.turnPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeon()).toBe(false);
    });

  });

});
