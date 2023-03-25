class Uber{
    constructor(personName,Startingpoint,Destination,distanceinkm,waitingperiod){
          
           this.personName=personName
           this.Startingpoint=Startingpoint;
           this.Destination=Destination;
           this.distanceinkm = distanceinkm;
           this.waitingperiod=waitingperiod;
}
price(){
    if (this.waitingperiod==undefined){
    return (`Thanks ${this.personName} for choosing uber, your trip price is Rs ${this.distanceinkm*18} from ${this.Startingpoint} to ${this.Destination} `)
    }else
{
    return (`Thanks ${this.personName} for choosing uber, your trip price is Rs ${(this.distanceinkm*18)+(this.waitingperiod*100)} from ${this.Startingpoint} to ${this.Destination} with ${this.waitingperiod} hours waiting period`)
}
}
}

let trip1 = new Uber("Ramesh","chennai","madurai",405)
let trip2 = new Uber("suresh","kovai","theni",180,2)
let trip3 = new Uber("Rajesh","Ramnad","madurai",200)

console.log(trip1.price())
console.log(trip2.price())
console.log(trip3.price())