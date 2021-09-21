var listOfMoviesOMDB = document.getElementById('boxOfDVDsOmdb');
var fetchOmdbButton = document.getElementById('searchOmdbButton');
var listOfMoviesWiki = document.getElementById('boxOfDVDsWiki');
var fetchWikiButton = document.getElementById('searchWikiButton');


function getApiDataImdb () {var requestURL = 'https://data-imdb1.p.rapidapi.com/movie/byYear/2000/byGen/Drama/'
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
                                         movieName.textContent = data[i];
                                         console.log(data[i] + ' title');
                                       //  console.log(data[i].Year + 'year');
                                       //  movieYear.textContent = data[i].Awards;
                                         listOfMoviesWiki.appendChild(movieName);
                                       //  boxOfDVDsOmdb.appendChild(movieYear);
         }
     });    
    

     //   for (i=0; i<data.length; i++) {var movieName = document.createElement('p');
     //       var movieYear = document.createElement('div');
      //      movieName.textContent = data[i].Title;
      //      movieYear.textContent = data[i].Year;
      //      boxOfDVDsWiki.appendChild(movieName);
      //      boxOfDVDsWiki.appendChild(movieYear);
     //   }
    //});
}
fetchWikiButton.addEventListener('click', getApiDataImdb);

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
    document.getElementById('input2').appendChild(input1);

 
