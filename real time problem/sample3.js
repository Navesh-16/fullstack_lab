var Temperature = /** @class */ (function () {
    function Temperature(location) {
        this.location = location;
        this.currentTemperature = 0;
    }
    Temperature.prototype.readTemperature = function () {
        this.currentTemperature = Math.random() * (40 - 10) + 10;
        return this.currentTemperature;
    };
    Temperature.prototype.getCurrentTemperature = function () {
        return this.currentTemperature;
    };
    Temperature.prototype.getLocation = function () {
        return this.location;
    };
    return Temperature;
}());
var Fan = /** @class */ (function () {
    function Fan() {
    }
    Fan.prototype.controlTemperature = function (temperature) {
        if (temperature > 25) {
            console.log("Turning on fan to reduce temperature.");
        }
        else {
            console.log("Turning off fan.");
        }
    };
    return Fan;
}());
var Vent = /** @class */ (function () {
    function Vent() {
    }
    Vent.prototype.controlTemperature = function (temperature) {
        if (temperature > 30) {
            console.log("Opening vent to reduce temperature.");
        }
        else {
            console.log("Closing vent.");
        }
    };
    return Vent;
}());
var GreenhouseController = /** @class */ (function () {
    function GreenhouseController(sensors, fan, vent) {
        this.sensors = sensors;
        this.fan = fan;
        this.vent = vent;
    }
    GreenhouseController.prototype.monitorAndControl = function () {
        var _this = this;
        setInterval(function () {
            _this.sensors.forEach(function (sensor) {
                var temperature = sensor.readTemperature();
                var location = sensor.getLocation();
                console.log("Temperature at ".concat(location, ": ").concat(temperature.toFixed(2), "\u00B0C"));
                _this.fan.controlTemperature(temperature);
                _this.vent.controlTemperature(temperature);
            });
        }, 5000);
    };
    return GreenhouseController;
}());
var main = function () {
    var sensor1 = new Temperature("Greenhouse");
    var fan = new Fan();
    var vent = new Vent();
    var greenhouseController = new GreenhouseController([sensor1], fan, vent);
    greenhouseController.monitorAndControl();
};
main();
