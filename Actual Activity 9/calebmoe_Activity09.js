function fetchData(){
    console.log("Begin fetch");
    fetch('./persons.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data.forEach(element => {
            appendData(element);
        });
        
    })
    .catch(function (err) {
        console.log('error:' + err);
    });
    console.log("End fetch");
}
function appendData(person) {
    let mainContainer = document.getElementById("myData1");
    let div = document.createElement("div");
    div.innerHTML = `
<div class="card mb-4" style="width: 100%;">
<img src=${person.logo} class="card-img-top" alt="superhero" width="100" />
<div class="card-body">
<h5 class="card-title">${person.firstName} ${person.lastName}</h5>
<p class="card-text">
<strong>Job:</strong> ${person.job} <br>
<strong>Roll:</strong> ${person.roll}
</p>
</div>
</div>
`;
    div.classList.add("col-sm-6", "col-md-4", "col-lg-3");
    mainContainer.appendChild(div);
    }

fetchData()