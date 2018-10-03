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

    it('resets the temperature to 20 degrees', function() {
      thermostat.down();
      thermostat.resetTemp();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
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

    it('can turn power saving mode back on', function() {
      thermostat.turnPowerSavingModeOff();
      thermostat.turnPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeon()).toBe(true);
    });

    describe ('When power saving mode is on', function() {

      it('has a max temperature of 25 degrees', function() {
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(25);
      });

    });

    describe ('When power saving mode is off', function() {

      it('has a max temperature of 32 degrees', function() {
        thermostat.turnPowerSavingModeOff();
        for (var i = 0; i < 13; i++) {
          thermostat.up();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(32);
      });

    });

  });

  describe ('Shows current energy usage', function() {

    it('displays low energy usage when temp is below 18 degrees', function() {
      for (var i = 0; i < 4; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentEnergyUsage()).toEqual("Low");
    });

    it('displays medium energy usage when temp is between 18 and 25 degrees', function() {
      expect(thermostat.getCurrentEnergyUsage()).toEqual("Medium");
    });

    it('displays high energy usage when temp is anything above 25 degrees', function() {
      thermostat.turnPowerSavingModeOff();
      for (var i = 0; i < 10; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentEnergyUsage()).toEqual("High");
    });

  });

});
