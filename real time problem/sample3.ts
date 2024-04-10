
class Temperature {
    private location: string;
    private currentTemperature: number;

    constructor(location: string) {
        this.location = location;
        this.currentTemperature = 0; 
    }
    public readTemperature(): number {
       
        this.currentTemperature = Math.random() * (40 - 10) + 10;
        return this.currentTemperature;
    }

    public getCurrentTemperature(): number {
        return this.currentTemperature;
    }

    public getLocation(): string {
        return this.location;
    }
}

class Fan {
    controlTemperature(temperature: number): void {
        if (temperature > 25) {
            console.log("Turning on cooler to reduce temperature.");
            
        } else if(temperature <20) {
            console.log("Turning on heater.");}
        else{
            console.log("Temperature within acceptable range.");
        }
        
    }
}
            
        

class Vent {
    controlTemperature(temperature: number): void {
        if (temperature > 30) {
            console.log("Opening vent to reduce temperature.");
         
        } else {
            console.log("Closing vent.");
            
        }
    }
}
class GreenhouseController {
    private sensors: Temperature[];
    private fan: Fan;
    private vent: Vent;

    constructor(sensors: Temperature[], fan: Fan, vent: Vent) {
        this.sensors = sensors;
        this.fan = fan;
        this.vent = vent;
    }

    public monitorAndControl(): void {
        setInterval(() => {
            this.sensors.forEach(sensor => {
                const temperature = sensor.readTemperature();
                const location = sensor.getLocation();
                console.log(`Temperature at ${location}: ${temperature.toFixed(2)}°C`);
                this.fan.controlTemperature(temperature);
                this.vent.controlTemperature(temperature);
            });
        }, 5000); 
    }
}


const main = () => {
    
    const sensor1 = new Temperature("Greenhouse");
    const fan = new Fan();
    const vent = new Vent();
    const greenhouseController = new GreenhouseController([sensor1], fan, vent);

    greenhouseController.monitorAndControl();
}

main();
