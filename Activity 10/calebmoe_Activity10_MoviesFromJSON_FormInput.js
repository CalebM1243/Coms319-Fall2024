function loadMovies(myMovies){
    const m = document.getElementById("selectedMovie");
    const inputMovieName = m.value;
    var CardMovie = document.getElementById("col");
    console.log("Selected movie:", inputMovieName);
    for (let i = 0; i < myMovies.length; i++) {
        if (myMovies[i].title == inputMovieName) {
            let title = myMovies[i].title;
            let year = myMovies[i].year;
            let url = myMovies[i].url;
            console.log(title);
            // construct the HTML element
            let AddCardMovie = document.createElement("div");
            AddCardMovie.classList.add("col"); // Add Bootstrap class to the column
            AddCardMovie.innerHTML = `
            <div class="card shadow-sm">
            <img src=${url} class="card-img-top" alt="..."></img>
            <div class="card-body">
            <p class="card-text"> <strong>${title}</strong>, ${year}</p>
            </div>
            </div>
            `;
            
            CardMovie.innerHTML = "";
            CardMovie.appendChild(AddCardMovie);
        } // end of if
    } 
}
function idk(){
    const b = document.getElementById("my_form");
    
    b.addEventListener("submit",(event)=>{
        event.preventDefault(); // Prevent the form from submitting in the traditional way
        fetch("./MoviesFromJSON.json").then(function (response){
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(function (data){
            loadMovies(data.movies);
        })
    });
}
document.addEventListener("DOMContentLoaded", function() {
    idk();
});
