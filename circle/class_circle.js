class circle
{
    constructor(radius,color){
        this.radius=radius;
        this.color=color
    }
getcircle_properties()
{
let data1 = (`The radius of ${this.radius} and the color is ${this.color}`)
return data1;
}
getcircle_circle()
{
let data2 = (`The radius of ${this.radius}`)
return data2;
}
getcircle_radius_circle()
{
let data3 = (`The radius of ${this.radius} and color is ${this.color}`)
return data3;
}
getradius1()
{
    let data4 = (`The radius of the circle is ${this.radius}`)
    return data4;
}
setradius(radi)
{
 this.radius =radi;   
}
getString()
{
    let data5=(`The circle color is ${this.color}`)
    return data5;
}
setstring(colo)
{
 this.color =colo;   
}
getarea()
{
    let data5 = (`The area of the circle is ${this.radius*3.14*this.radius}`)
    return data5;
}
getcircum()
{
    let data5 = (`The circumference of the circle is ${2*3.14*this.radius}`)
    return data5;
}
gettostring(){
    let data6 = (`circle[radius=${(this.radius).toString()},color=${this.color}]`)
    return data6
}

}

let circle_properties = new circle(1.0,"red")

console.log(` # Circle()  : ${circle_properties.getcircle_properties()}`)

let radius2 = new circle (1.0)
console.log(` # getRadius : ${radius2.getradius1()}`)

let string1 = new circle (1,"red")
console.log(` # getString : ${string1.getString()}`) 


let Area = new circle (1.0)
console.log(` # getarea   : ${Area.getarea()}`) 

let Circum = new circle (1.0)
console.log(` # getCircum : ${Circum.getcircum()}`)  
    
let Setradius2 = new circle (1.0)
Setradius2.setradius(3)
console.log(` # setRadius : ${Setradius2.getradius1()}`)
    
let Setcolor = new circle (1.0,"red")
Setcolor.setstring("green")
console.log(` # setColor  : ${Setcolor.getString()}`)  

let tostring1 = new circle (1,"red")
console.log(` # toString  : ${tostring1.gettostring()}`)   