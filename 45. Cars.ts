import { features } from "process";

function creatCar(manufacturer: string, model: string, ...options: { [key: string]: any}[]): Record<string, any> {
    const carInfo: Record<string, any> = { manufacturer, model, ...options};
    return carInfo;
}

const  myCar = creatCar("Toyota", "Camry", ["color", "blue"] , ["optionalFeature", "Sunroof"]); 

console.log(myCar);