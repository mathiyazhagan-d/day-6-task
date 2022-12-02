//circle - class
console.log("")//for allignment perposer
console.log("1-Class movie");
console.log("")

//class movie
// questin a)


class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    // qestion b)
    if(this.rating==null){
        return this.rating = "PG";}
    }
    //question c)
    getPG(arr1){
        let result= arr.filter((ele)=>ele.rating=="PG");
        return result;
    }
}
let movie1= new Movie("roja","red giant");
let movie2= new Movie("ram","leela Production","PG13");
let movie3= new Movie("spiderman","marvel");
let arr=[movie1,movie2,movie3];
console.log(movie2.getPG(arr));
//question d)
let movie4= new Movie("Casino Royale","Econ Production","PG13");
console.log(movie4)