'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP;
  this.powerSavingMode = true;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.getCurrentEnergyUsage = function () {
  if(this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return "Low";
  }
  if(this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAX_LIMIT_PSM_ON) {
    return "Medium";
  }
  return "High";
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function () {
  if (this.isPowerSavingModeon() === false) {
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
}

Thermostat.prototype.isPowerSavingModeon = function () {
  return this.powerSavingMode === true;
};

Thermostat.prototype.turnPowerSavingModeOff = function () {
  this.powerSavingMode = false;
};

Thermostat.prototype.turnPowerSavingModeOn = function () {
  this.powerSavingMode = true;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.resetTemp = function () {
  this.temperature = this.DEFAULT_TEMP;
};
