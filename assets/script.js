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
// var enterYear0 = document.getElementById('enterYear');
var movieTitle;
var object1;
var inputVal = '2021';
var inputYear;
//these five variables are created to display movies 5-9, 10-14, etc. They do not work yet
var dramaCount = 0;
var familyCount = 0;
var thrillerCount = 0;
var comedyCount = 0;
var actionCount = 0;

// two lines below will allow user to search by year
function getInputValue() {var inputVal = document.getElementById('myInput').value;
console.log('inputVal'+inputVal);
console.log(typeof inputVal);
inputYear = parseInt(inputVal);
console.log('inputYear'+inputYear);
}

localStorage.setItem('inputYear', inputVal);
console.log('outside finction ' + inputYear);
fetchImdbDrama.addEventListener('click', getApiDataImdb);
fetchImdbFamily.addEventListener('click', getApiDataImdb);
fetchImdbThriller.addEventListener('click', getApiDataImdb);
fetchImdbComedy.addEventListener('click', getApiDataImdb);
fetchImdbAction.addEventListener('click', getApiDataImdb);

function getApiDataImdb(event) {
  var genre = event.currentTarget.value;
  console.log(genre);
  // three lines below are supposed to add year to the header but they do it multiple times if I click multiple buttons. disabled for now
//   var movieYear = document.createElement('span');
// movieYear.innerHTML = inputYear;
// document.getElementById('top5D').appendChild(movieYear);

  var requestURL = 'https://data-imdb1.p.rapidapi.com/movie/byYear/' + inputYear + '/byGen/' + genre + '/';
  fetch(requestURL, {
    "method": "GET", "headers": {
      "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
      "x-rapidapi-key": "f567ffdbe0msh246ba4a9ef34553p1195c8jsn6e946070d30d"
    }
  })

    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      for (i = 0; i < 5; i++) {
        var movieName = document.createElement('p');
        movieName.textContent = data.results[i].title;
        movieTitle = data.results[i].title;
        // ugly method to replace ' ' to %20 in movieTitle, I know I was supposed to write a loop
        movieTitleFormatted = movieTitle.replace(" ", "%20");
        movieTitleFormatted1 = movieTitleFormatted.replace(" ", "%20");
        movieTitleFormatted2 = movieTitleFormatted1.replace(" ", "%20");
        movieTitleFormatted3 = movieTitleFormatted2.replace(" ", "%20");
        movieTitleFormatted4 = movieTitleFormatted3.replace(" ", "%20");
        var requestURLOmdb = 'https://www.omdbapi.com/?i=tt3896198&apikey=bf124b81&t=' + movieTitleFormatted4 + '&plot=full'
        var requestPosterOmdb = 'http://img.omdbapi.com/?i=tt3896198&apikey=bf124b81&t=' + movieTitleFormatted4 + '&plot=full'
        // end of ugly method


        //start second fetch
        fetch(requestURLOmdb)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            var object1 = data;
            // I definitely can convert following five if .. else if ... else if ... pieces to one loop later
            if (genre == 'Drama') {

              var movieName1 = document.createElement('p');
              movieName1.innerHTML = object1.Title;
              document.getElementById('boxOfDVDsDrama').appendChild(movieName1);
              var movieData = document.createElement('p');
              movieData.innerHTML = 'Director: ' + object1.Director + ', Actors: ' + object1.Actors + ', Rating ' + object1.Metascore + ', Plot: ' + object1.Plot;
              document.getElementById('boxOfDVDsDrama').appendChild(movieData)
              dramaCount++;
            }
            else if (genre == 'Family') {
              var movieName1 = document.createElement('p');
              movieName1.innerHTML = object1.Title;
              document.getElementById('boxOfDVDsFamily').appendChild(movieName1)
              var movieData = document.createElement('p');
              movieData.innerHTML = 'Director: ' + object1.Director + ', Actors: ' + object1.Actors + ', Rating ' + object1.Metascore + ', Plot: ' + object1.Plot;
              document.getElementById('boxOfDVDsFamily').appendChild(movieData)
              familyCount++;
            }
            else if (genre == 'Thriller') {
              var movieName1 = document.createElement('p');
              movieName1.innerHTML = object1.Title;
              document.getElementById('boxOfDVDsThriller').appendChild(movieName1)
              var movieData = document.createElement('p');
              movieData.innerHTML = 'Director: ' + object1.Director + ', Actors: ' + object1.Actors + ', Rating ' + object1.Metascore + ', Plot: ' + object1.Plot;
              document.getElementById('boxOfDVDsThriller').appendChild(movieData)
              thrillerCount++;
            }
            else if (genre == 'Comedy') {
              var movieName1 = document.createElement('p');
              movieName1.innerHTML = object1.Title;
              document.getElementById('boxOfDVDsComedy').appendChild(movieName1)
              var movieData = document.createElement('p');
              movieData.innerHTML = 'Director: ' + object1.Director + ', Actors: ' + object1.Actors + ', Rating ' + object1.Metascore + ', Plot: ' + object1.Plot;
              document.getElementById('boxOfDVDsComedy').appendChild(movieData)
              comedyCount++;
            }
            else if (genre == 'Action') {
              var movieName1 = document.createElement('p');
              movieName1.innerHTML = object1.Title;
              document.getElementById('boxOfDVDsAction').appendChild(movieName1)
              var movieData = document.createElement('p');
              movieData.innerHTML = 'Director: ' + object1.Director + ', Actors: ' + object1.Actors + ', Rating ' + object1.Metascore + ', Plot: ' + object1.Plot;
              document.getElementById('boxOfDVDsAction').appendChild(movieData)
              thrillerCount++;
            }
            else { }
          });
        //end second fetch
      }
    });
}



