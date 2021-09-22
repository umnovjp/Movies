var listOfMoviesOMDB = document.getElementById('boxOfDVDsOmdb');
var fetchOmdbButton = document.getElementById('searchOmdbButton');
var listOfMoviesImdbDrama = document.getElementById('boxOfDVDsDrama');
var fetchImdbDrama = document.getElementById('dramaImdbButton');
var listOfMoviesImdbFamily = document.getElementById('boxOfDVDsFamily');
var fetchImdbFamily = document.getElementById('familyImdbButton');
var listOfMoviesImdbThriller = document.getElementById('boxOfDVDsThriller');
var fetchImdbThriller = document.getElementById('thrillerImdbButton');
var listOfMoviesImdbComedy = document.getElementById('boxOfDVDsComedy');
var fetchImdbComedy = document.getElementById('comedyImdbButton');
var listOfMoviesImdbAction = document.getElementById('boxOfDVDsAction');
var fetchImdbAction = document.getElementById('actionImdbButton');

fetchImdbDrama.addEventListener('click', getApiDataImdb);
fetchImdbFamily.addEventListener('click', getApiDataImdb);
fetchImdbThriller.addEventListener('click', getApiDataImdb);
fetchImdbComedy.addEventListener('click', getApiDataImdb);
fetchImdbAction.addEventListener('click', getApiDataImdb);

function getApiDataImdb (event) {
    var buttonInput = console.log(event.currentTarget);
   // document.writeln(String(buttonInput));
    var genre = event.currentTarget.value;
    console.log(genre);
    // var requestURL = 'https://data-imdb1.p.rapidapi.com/movie/byYear/2000/byGen/Drama/'
    var requestURL = 'https://data-imdb1.p.rapidapi.com/movie/byYear/2000/byGen/' + genre + '/';
    fetch(requestURL, {"method": "GET",  "headers": {
		"x-rapidapi-host": "data-imdb1.p.rapidapi.com",
		"x-rapidapi-key": "f567ffdbe0msh246ba4a9ef34553p1195c8jsn6e946070d30d"
	}     } )
    .then(function(response) {return response.json();
        // console.log(response.status);
     })
         .then(function(data) {console.log(data);
         for (i=0; i<5; i++) {var movieName = document.createElement('p');
                                       //  var movieYear = document.createElement('p');
                                         movieName.textContent = data.Data[i].title;
                                         console.log(data.Data[i].title + ' title');
                                       //  console.log(data[i].Year + 'year');
                                       //  movieYear.textContent = data[i].Awards;
                                       if (genre = 'Drama') {listOfMoviesImdbDrama.appendChild(movieName);}
                                         else if (genre = 'Family') {listOfMoviesImdbFamily.appendChild(movieName);}
                                         else if (genre = 'Thriller') {listOfMoviesImdbThriller.appendChild(movieName);}
                                         else if (genre = 'Comedy') {listOfMoviesImdbComedy.appendChild(movieName);}
                                         else if (genre = 'Action') {listOfMoviesImdbAction.appendChild(movieName);}
                                         else {};
                                       //  boxOfDVDsOmdb.appendChild(movieYear);
         }
     });    
    
}


function getApiOmdb () {var requestURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=bf124b81&t=godfather&plot=full'
    fetch(requestURL)
        .then(function(response) {return response.json();
       // console.log(response.status);
    })
        .then(function(data) {console.log(data);
        for (i=0; i<data.length; i++) {var movieName = document.createElement('p');
                                        var movieYear = document.createElement('p');
                                        movieName.textContent = data[i].Actors;
                                        console.log(data[i] + ' title');
                                      //  console.log(data[i].Year + 'year');
                                        movieYear.textContent = data[i].Awards;
                                        boxOfDVDsOmdb.appendChild(movieName);
                                        boxOfDVDsOmdb.appendChild(movieYear);
        }
    });
}
fetchOmdbButton.addEventListener('click', getApiOmdb);


// lines below are just to make sure that JS works here
var pTag1 = document.createElement("p");
    pTag1.textContent = 'this paragraph is created using JS';
    pTag1.setAttribute("id", "list1")
    pTag1.setAttribute("id", "parTag1")
    document.getElementById('question').appendChild(pTag1);
    var input1 = document.createElement("input");
    input1.setAttribute("class", "input")
    input1.setAttribute("placeholder", "year")
    document.getElementById('input2').appendChild(input1);

 
