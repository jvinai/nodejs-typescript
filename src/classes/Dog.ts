import Animal from './../interfaces/Animal';
import FoodType from './../enums/FoodType';

export default class Dog implements Animal {
    age:number;
    foodType:FoodType;
    isPet:boolean;
    petName:string;

    constructor(age:number, foodType:FoodType, isPet:boolean, petName?:string) {
        this.age = age
        this.foodType = foodType;
        this.isPet = isPet;
        this.petName = petName;
    }


}