class Movie{
    constructor(title,studio,rating){
       this.title=title;
       this.studio=studio;
       this.rating=rating;
    }
    get getmovie(){
      return this.title
   }
    set setrat(newtitle){
      this.title=newtitle
    }
    get getPG(){
   
      if(this.rating=="PG")
     { return (`${this.title} movie is PG rated`)
     }else{
      return (`${this.title} movie is not PG rated`)
     }
   }
   
   Rating(){
      if(this.rating==undefined){
      return this.rating="PG"
   }
   else
   {
      return this.rating=rating
   }
   
   }
   }
   
   
   let movie1 = new Movie("Casino Royalee","Eon Productions","PG­13")
   let movie2 = new Movie("Thunivu","Boney mamu Productions","PG­15")
   let movie3 = new Movie("Varisudu","Anil Productions")
   let movie4 = new Movie("noname","marvel","PG")
   
   //set method
   
   movie4.setrat = "superman"
   console.log(movie4.title)
   
    // Rating "PG" for unrated movies  
   
   console.log(movie3.Rating())
   
   //get "PG" method
   
   console.log(movie2.getPG)
   
   
   let movies = [movie1,movie2,movie3,movie4]
   console.log(movies)
   
   
   
   // All movies,studios & ratings of given list 
   
   for(let key in movies){
      if(movies[key].rating==undefined)
      {
         movies[key].rating="PG"
      }
      console.log(`Movie name :  ${movies[key].title} 
   Studio     :  ${movies[key].studio}
   Rating     :  ${movies[key].rating}`)
   }
   
   // "PG" rated movies 
   
   let result = movies.filter(element=>(element.rating=="PG"))
   for(let value of result){
   console.log(`${value.title}`)
   }

let movie_arr =[movie1,movie2,movie3,movie4]
movie_arr.forEach((movies)=>console.log(`${movies.getPG}`))
   