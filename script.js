// Assignment of Day 6 

// CODE FOR QUESTION 1A,1B & 1D 

class Movie{
    constructor(title,studio,rating="PG-13"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}

let movie1 =  new Movie("Iron Man","MCU","PG-13");
let movie2 =  new Movie("Iron Man 2","MCU","PG-13");
let movie3 =  new Movie("Iron Man 3","MCU","PG-13");
let movie4 =  new Movie("Logan","20th Century Studios","R");
let movie5 =  new Movie("The Revenant","Regency","R");
let movie6 =  new Movie("300","MCU","R");
let movie7 =  new Movie("Casino Royale","Eon Productions","PG-­13");

// console.log(movie1);
// console.log(movie2);
// console.log(movie3);
// console.log(movie4);
// console.log(movie5);
// console.log(movie6);

// Output:

// Movie {title: 'Iron Man', studio: 'MCU', rating: 'PG-13'}
// Movie {title: 'Iron Man 2', studio: 'MCU', rating: 'PG-13'}
// Movie {title: 'Iron Man 3', studio: 'MCU', rating: 'PG-13'}
// Movie {title: 'Logan', studio: '20th Century Studios', rating: 'R'}
// Movie {title: 'The Revenant', studio: 'Regency', rating: 'R'}
// Movie {title: '300', studio: 'MCU', rating: 'R'}

// CODE FOR QUESTION 1C

let movieList = [movie1,movie2,movie3,movie4,movie5,movie6,movie7];

function getPG(movieArr){
    var pgMovieArr=new Array();
    for(var i =0;i<movieArr.length;i++){
        if(movieArr[i].rating=="PG-13"){
            pgMovieArr.push(movieArr[i]); 
        }
    }
    return pgMovieArr;
}

console.log(movieList);
console.log(getPG(movieList));

//O/P:

// Movie { title: 'Iron Man', studio: 'MCU', rating: 'PG-13' },
// Movie { title: 'Iron Man 2', studio: 'MCU', rating: 'PG-13' },
// Movie { title: 'Iron Man 3', studio: 'MCU', rating: 'PG-13' }







