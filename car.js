// 01 Batmobile

class Car {
    constructor(brand,speed) {
        this.brand = brand,
        this.speed = speed
    }

    accelerate(number) {
        this.speed += number
    }

    brake(number) {
        this.speed -=number
    }

    describe() {
        console.log(`${this.brand} running at ${this.speed} km/h`);
    }
}

// let ford = new Car ("ford",0);
// console.log(ford);
// ford.accelerate(50)
// console.log(ford);
// ford.brake(25)
// console.log(ford);

// let peugeot = new Car ("peugeot",0);
// console.log(peugeot);
// peugeot.accelerate(70)
// console.log(peugeot);
// peugeot.brake(30)
// console.log(peugeot);

// 02 tv
class Tv {
    constructor(brand) {
        this.brand= brand,
        this.channel= 1,
        this.volume= 50
    }

    volumeUp(number) {
        if((this.volume - number) >0 && (this.volume - number) <100){
            this.volume +=number;
        }
    }

    volumeDown(number) {
        if((this.volume - number) >0 && (this.volume - number) <100){
            this.volume -=number;
        }
    }


    changechannel(number) {
        if((number) > 0 && (number<50)){
            this.channel = number
        }
    }

    reset() {
        this.channel = 0;
        this.volume = 0;
    }

    describe() {
        console.log(` tu regarde la chaîne numero ${this.channel} et le volume est à ${this.volume}`);
    }
}

let sony = new Tv ("sony")
console.log(sony);
sony.changechannel(1)
sony.volumeUp(10)
sony.describe()
// sony.reset()
// console.log(sony);