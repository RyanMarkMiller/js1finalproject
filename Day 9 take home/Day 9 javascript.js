function Movie(title, runningTimeInMinutes, year, genre, desc) {
    this.title = title;
    this.runningTimeInMinutes = runningTimeInMinutes;
    this.year = year;
    this.genre = genre;
    this.desc = desc;
}

Movie.prototype = {
    runningTimeInHours: function () {
        var hours = Math.floor(this.runningTimeInMinutes / 60);
        var minutes = this.runningTimeInMinutes % 60;

        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        return hours + ':' + minutes;
    },
    preview: function () {
        if (this.desc.length > 50) {
            if (this.desc[49] == ' ') {
                return this.desc.slice(0,49) + '...';
            } else {
                return this.desc.slice(0, 50) + '...';
            }
        } else {
            return this.desc;
        }
    }
};

function e(elementType, text, attributes, styles) {
    attributes = attributes || {};
    styles = styles || {};

    var newElement = document.createElement(elementType);

    if (text) {
        newElement.textContent = text;
    }

    //set the attributes on the tag
    for (var attr in attributes) {
        if (attributes.hasOwnProperty(attr)) {
            newElement.setAttribute(attr, attributes[attr]);
        }
    }

    //set the styles
    for (var style in styles) {
        if (styles.hasOwnProperty(style)) {
            newElement.style[style] = styles[style];
        }
    }

    return newElement;
}

var form = document.getElementById("newMovieForm");

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var title = document.getElementById('movieTitle').value;
    var runningTimeInMinutes = document.getElementById('runningTime').value;
    var year = document.getElementById('year').value;
    var desc = document.getElementById('desc').value;
    var genreInputs = document.getElementsByName("genre");
    var genre = form.genre.value;

    if(genre = "") {
        genre = "None";
    }

    for (var i = 0; i < genreInputs.length; i++) {
        var genreInput = genreInputs[i];
        if (genreInput.checked) {
            genre = genreInput.value;
        }
    }
    var myMovie = new Movie(title, runningTimeInMinutes, year, genre, desc );
    var myText = myMovie.title + ' | ' + myMovie.runningTimeInHours() + ' | ' + myMovie.year;
    var myElement = e('li', myText,{},{color: 'blue'} );

    myElement.addEventListener('click', function() {
        alert(myMovie.preview());
    });

    document.getElementById("movie-list").appendChild(myElement);
});

