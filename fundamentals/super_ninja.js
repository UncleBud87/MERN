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

class Sensei extends Ninja {
    constructor(name, health){
        super(name, health)
        this.wisdom = 10
    }
    speakWisdom(){
        console.log(this.wisdom)
    }
}

let sensei1 = new Sensei("George", 100)

console.log(sensei1)

sensei1.speakWisdom()