class person{                                                                     
    constructor(firstname,lastname,age,experience,degree){
        this.firstname   =firstname;
        this.lastname    =lastname;
        this.age         =age;
        this.experience  =experience;
        this.degree      =degree;
    }
    person_details(){
        let data=`
        Name : ${this.firstname} ${this.lastname} is Age : ${this.age} Experience : ${this.experience} Degree : ${this.degree}`;                                                                       
        return data;
    }
}
let person1=new person("vijay","joseph",45,15,"Mechanical");      
let person2=new person("ajith","kumar",44,6,"Actor");
let person3=new person("surya","saravan",40,5,"Accounts")

let arrey_persons=[person1,person2,person3];                                      
arrey_persons.forEach((data)=>console.log(data.person_details()))    
