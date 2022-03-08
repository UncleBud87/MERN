// parent Ninja class
class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3
    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log(this.name, this.health, this.speed, this.strength)
    }
    drinkSake(){
        this.health +=10
        console.log()
    }

}

const ninja1 = new Ninja("Tom", 100)

ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
ninja1.showStats()