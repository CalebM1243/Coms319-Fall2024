function loadMovies(myMovies,n){
    const arrayMovies = Object.values(myMovies);

    let sortedMovies = [];
    switch (n){
        case 1:
            sortedMovies = arrayMovies.sort((p1,p2) => (p1.price>p2.price) ? 1 : (p1.price<p2.price) ? -1 : 0);
            break;
        case 2:
            sortedMovies = arrayMovies.sort((p1,p2) => (p1.price>p2.price) ? -1 : (p1.price<p2.price) ? 1 : 0);
            break;
        case 3:
            const inputDescription = document.getElementById("descriptionInput").value;
            document.getElementById('inputField').style.display = 'none';
            arrayMovies.forEach(element => {
               if(element.description.includes(inputDescription)){
                sortedMovies.push(element);
               }    
            });
            break;
    }
    var CardMovie = document.getElementById("col");
    CardMovie.innerHTML = "";
    console.log(sortedMovies)
    console.log(typeof(sortedMovies))
    for (let i = 0; i < sortedMovies.length; i++) {
            let title = sortedMovies[i].title;
            let year = sortedMovies[i].year;
            let url = sortedMovies[i].url;
            let price = sortedMovies[i].price;
            console.log(title);
            // construct the HTML element
            let AddCardMovie = document.createElement("div");
            AddCardMovie.classList.add("col"); // Add Bootstrap class to the column
            AddCardMovie.innerHTML = `
            <div class="card shadow-sm">
            <img src=${url} class="card-img-top" alt="..."></img>
            <div class="card-body">
            <p class="card-text"> <strong>${title}</strong>, ${year}, $${price}</p>
            </div>
            </div>
            `;
            AddCardMovie.addEventListener('click', function() {
                if(this.querySelector(".card").style.backgroundColor == "white"){
                    this.querySelector(".card").style.backgroundColor = 'black'; // Change the background color
                    this.querySelector(".card-text").style.color = 'white'; // Change text color to ensure readability
                }
                else{
                    this.querySelector(".card").style.backgroundColor = 'white'; // Change the background color
                    this.querySelector(".card-text").style.color = 'black'; // Change text color to ensure readability
                }
            });
            
            CardMovie.appendChild(AddCardMovie);
    } 
}
function fetchMovies(){
    return fetch("./MoviesFromJSON.json")
    .then(response => response.json())
    .then(json =>{
        return json;
    });
}
function showCardsSortedByPriceLowHigh(){
    fetchMovies()
    .then(myMovies => loadMovies(myMovies.movies, 1))
    .catch(err => console.log("Error :"+err));
}
function showCardsSortedByPriceHighLow(){
    fetchMovies()
    .then(myMovies => loadMovies(myMovies.movies, 2))
    .catch(err => console.log("Error :"+err));
}
function showCardsContainingDescriptionA(){
    const inputField = document.getElementById('inputField');
    inputField.style.display = 'block';
}
function showCardsContainingDescriptionB(){
    fetchMovies()
    .then(myMovies => loadMovies(myMovies.movies, 3))
    .catch(err => console.log("Error :"+err));
}
fetchMovies()
