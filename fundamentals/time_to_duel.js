class Ninja{
    constructor(cost, power, resilience){
        this.cost=cost;
        this.power=power;
        this.resilience=resilience
    }
    hardAlgorithm(){
        this.cost -= 2
        this.resilience += 3
        console.log("increase target's resilience by 3")
    }
    unhandledPromiseRejection(){
        this.cost -= 1
        this.resilience -= 2
        console.log("reduce target's resilience by 2")
    }
    pairProgramming(){
        this.cost -= 3
        this.power += 2
        console.log("increase target's power by 2")
    }
    attack(Ninja){
        this.cost -=1
        Ninja.resilience -= 3
    }
}

let RedBeltNinja = new Ninja(3,3,4)
console.log(RedBeltNinja)
RedBeltNinja.hardAlgorithm()
console.log(RedBeltNinja)
let BlackBeltNinja = new Ninja(4,5,4)
console.log(BlackBeltNinja)
RedBeltNinja.unhandledPromiseRejection()
console.log(RedBeltNinja)
RedBeltNinja.pairProgramming()
console.log(RedBeltNinja)
RedBeltNinja.attack(BlackBeltNinja)
console.log(RedBeltNinja)
console.log(BlackBeltNinja)